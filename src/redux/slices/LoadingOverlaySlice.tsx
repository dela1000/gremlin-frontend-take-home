import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LoadingOverlayState = {
  display: boolean;
};

const initialState: LoadingOverlayState = {
  display: false,
};

const errorModalSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    displayLoadingOverlay: (state, action: PayloadAction<boolean>) => {
      state.display = action.payload;
    },
  },
});

export const { displayLoadingOverlay } = errorModalSlice.actions;
export default errorModalSlice.reducer;
