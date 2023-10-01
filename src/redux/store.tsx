import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/SearchSlice';
import errorModalSlice from './slices/ErrorModalSlice';
import loadingOverlaySlice from './slices/LoadingOverlaySlice';

export const store = configureStore({
  reducer: {
    searchSlice,
    errorModalSlice,
    loadingOverlaySlice,
  },
});
