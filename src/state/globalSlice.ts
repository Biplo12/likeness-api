import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import IGlobalReducerInterface from '@/interfaces/IGlobalReducerInterface';

const initialState: IGlobalReducerInterface = {
  selectedResponseCode: 200,
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setResponseCode: (state, action) => {
      state.selectedResponseCode = action.payload;
    },
  },
});

const { actions, reducer } = slice;
export const { setResponseCode } = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;
