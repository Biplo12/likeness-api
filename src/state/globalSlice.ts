import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

import IGlobalReducerInterface from '@/interfaces/IGlobalReducerInterface';

const initialState: IGlobalReducerInterface = {
  selectedResponseCode: 200,
  isKeyHidden: true,
  apiKey: null,
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
    setApiKey: (state, action) => {
      state.apiKey = action.payload;
    },
    setInitialUserState: (state) => {
      state.apiKey = initialState.apiKey;
    },
  },
});

const { actions, reducer } = slice;
export const {
  setResponseCode,
  toggleKeyVisibility,
  setApiKey,
  setInitialUserState,
} = actions;
export const selectGlobal = (state: RootState) => state.global;
export default reducer;
