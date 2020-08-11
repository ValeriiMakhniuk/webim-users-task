import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from '../feauteres/auth/authSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
