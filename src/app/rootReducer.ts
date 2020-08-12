import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from '../feauteres/auth/authSlice';
import { usersReducer } from '../feauteres/users/usersSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
