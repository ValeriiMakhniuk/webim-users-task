import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './../../app/store';

import { getAuthToken, MAuthToken } from '../../api/api';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  user: {
    firstName?: string;
    lastName?: string;
    lastLogin?: string;
    isSuperUser?: boolean;
    isActive?: boolean;
  } | null;
}

const authInitialState: AuthState = {
  isAuthenticated: false,
  token: null,
  isLoading: false,
  error: null,
  user: null,
};

const startLoading = (state: AuthState) => {
  state.isLoading = true;
};

const loadingFailure = (state: AuthState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    authStart: startLoading,
    authSucess(state, { payload }: PayloadAction<string>) {
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = true;
      state.token = payload;
    },
    authFailure: loadingFailure,
  },
});

export const authReducer = authSlice.reducer;

export const { authStart, authSucess, authFailure } = authSlice.actions;

export const authenticate = (credentials: MAuthToken): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(authStart());
    const token = await getAuthToken(credentials);
    dispatch(authSucess(token));
  } catch (error) {
    dispatch(authFailure(error.message));
  }
};
