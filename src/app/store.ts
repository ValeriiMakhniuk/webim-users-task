import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import localStore from 'store';

import { rootReducer, RootState } from './rootReducer';

const token = localStore.get('token');

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    auth: {
      isAuthenticated: !!token,
      token,
    },
  },
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
