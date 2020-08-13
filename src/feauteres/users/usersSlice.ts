import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  MUser,
  MUserData,
  getUsers as getUsersFromApi,
  getUser as getUserFromApi,
  postUser as postUserToApi,
  putUser as putUserToApi,
  patchUser as pathUserToApi,
  deleteUser as deleteUserFromApi,
} from '../../api/api';
import { AppThunk } from '../../app/store';

interface UsersState {
  usersById: Record<string, MUser>;
  allIds: number[];
  isLoading: boolean;
  error: string | null;
}

const usersInitialState: UsersState = {
  usersById: {},
  allIds: [],
  isLoading: false,
  error: null,
};

function startLoading(state: UsersState) {
  state.isLoading = true;
}

function loadingFailed(state: UsersState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

const users = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    getUserStart: startLoading,
    getUsersStart: startLoading,
    postUserStart: startLoading,
    putUserStart: startLoading,
    patchUserStart: startLoading,
    deleteUserStart: startLoading,
    getUserSuccess(state, { payload }: PayloadAction<MUser>) {
      const { id } = payload;
      state.usersById[id] = payload;
      state.isLoading = false;
      state.error = null;
    },
    getUsersSuccess(state, { payload }: PayloadAction<MUser[]>) {
      state.isLoading = false;
      state.error = null;

      payload.forEach((user) => {
        state.usersById[user.id] = user;
        state.allIds.push(user.id);
      });
    },
    postUserSucess(state, { payload }: PayloadAction<MUser>) {
      const { id } = payload;

      state.isLoading = false;
      state.error = null;
      state.usersById[id] = payload;
      state.allIds.push(id);
    },
    putUserSucess(state, { payload }: PayloadAction<MUser>) {
      const { id } = payload;

      state.isLoading = false;
      state.error = null;
      state.usersById[id] = payload;
    },
    patchUserSucess(state, { payload }: PayloadAction<MUser>) {
      const { id } = payload;

      state.isLoading = false;
      state.error = null;
      state.usersById[id] = payload;
    },
    deleteUserSucess(state, { payload }: PayloadAction<number>) {
      state.isLoading = false;
      state.error = null;
      delete state.usersById[payload];
      state.allIds.splice(
        state.allIds.findIndex((id) => id === payload),
        1
      );
    },
    getUserFailure: loadingFailed,
    getUsersFailure: loadingFailed,
    postUserFailure: loadingFailed,
    putUserFailure: loadingFailed,
    patchUserFailure: loadingFailed,
    deleteUserFailure: loadingFailed,
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUserStart,
  getUserSuccess,
  postUserStart,
  postUserSucess,
  putUserStart,
  putUserSucess,
  patchUserStart,
  patchUserSucess,
  deleteUserStart,
  deleteUserSucess,
  getUserFailure,
  getUsersFailure,
  postUserFailure,
  putUserFailure,
  patchUserFailure,
  deleteUserFailure,
} = users.actions;

export const usersReducer = users.reducer;

export const fetchUsers = (token: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getUsersStart());
    const fetchedUsers = await getUsersFromApi(token);
    dispatch(getUsersSuccess(fetchedUsers));
  } catch (err) {
    dispatch(getUsersFailure(err.message));
  }
};

export const fetchUser = (userId: number, token: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(getUserStart());
    const user = await getUserFromApi(userId, token);
    dispatch(getUserSuccess(user));
  } catch (err) {
    dispatch(getUserFailure(err.message));
  }
};

export const postUser = (
  token: string,
  userData: MUserData
): AppThunk => async (dispatch) => {
  try {
    dispatch(postUserStart());
    const user = await postUserToApi(userData, token);
    dispatch(postUserSucess(user));
  } catch (err) {
    dispatch(postUserFailure(err.message));
  }
};

export const putUser = (
  userId: number,
  userData: MUserData,
  token: string
): AppThunk => async (dispatch) => {
  try {
    dispatch(putUserStart());
    const user = await putUserToApi(userId, userData, token);
    dispatch(putUserSucess(user));
  } catch (err) {
    dispatch(putUserFailure(err.message));
  }
};

export const patchUser = (
  userId: number,
  userData: MUserData,
  token: string
): AppThunk => async (dispatch) => {
  try {
    dispatch(patchUserStart());
    const user = await pathUserToApi(userId, userData, token);
    dispatch(patchUserSucess(user));
  } catch (err) {
    dispatch(patchUserFailure(err.message));
  }
};

export const deleteUser = (userId: number, token: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(deleteUserStart());
    const deletedUserId = await deleteUserFromApi(userId, token);
    dispatch(deleteUserSucess(deletedUserId));
  } catch (err) {
    dispatch(deleteUserFailure(err.message));
  }
};
