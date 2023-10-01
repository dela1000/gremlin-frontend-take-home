import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Package } from '../../types/types';

type SearchState = {
  searchString: string;
  packagesResults: Package[];
};

const initialState: SearchState = {
  searchString: '',
  packagesResults: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
    setPackagesResults: (state, action: PayloadAction<Package[]>) => {
      state.packagesResults = action.payload;
    },
  },
});

export const { updateString, setPackagesResults } = searchSlice.actions;
export default searchSlice.reducer;
