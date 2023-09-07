import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import IGlobalReducerInterface from '@/interfaces/IGlobalReducerInterface';

const initialState: IGlobalReducerInterface = {
  selectedLanguage: 'NodeJS',
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

const { actions, reducer } = slice;
export const { setLanguage } = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;
