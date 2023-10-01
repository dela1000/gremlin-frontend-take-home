import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ErrorModalState = {
  display: boolean;
  errorMessage: string;
};

const initialState: ErrorModalState = {
  display: false,
  errorMessage: '',
};

const errorModalSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    displayErrorModal: (
      state,
      action: PayloadAction<{ display: boolean; errorMessage: string }>,
    ) => {
      state.display = action.payload.display;
      state.errorMessage = action.payload.errorMessage;
    },
  },
});

export const { displayErrorModal } = errorModalSlice.actions;
export default errorModalSlice.reducer;
