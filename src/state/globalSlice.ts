import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import IGlobalReducerInterface from '@/interfaces/IGlobalReducerInterface';

const initialState: IGlobalReducerInterface = {
  selectedResponseCode: 200,
  isKeyHidden: true,
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    setResponseCode: (state, action) => {
      state.selectedResponseCode = action.payload;
    },
    toggleKeyVisibility: (state) => {
      state.isKeyHidden = !state.isKeyHidden;
    },
  },
});

const { actions, reducer } = slice;
export const { setResponseCode, toggleKeyVisibility } = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;
