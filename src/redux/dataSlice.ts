import { WritableDraft } from './../../node_modules/immer/src/types/types-external';
import { createSlice } from '@reduxjs/toolkit';

export interface UserInfo {
  email: string;
  age: number;
  name: string;
}

export interface DataInterface {
  secondData: number;
  userInfo: UserInfo | undefined;
}

const initialState: DataInterface = {
  secondData: 0,
  userInfo: undefined,
};

export const dataSlice = createSlice({
  name: 'data-slice',
  initialState,
  reducers: {
    setSecondData: (state: WritableDraft<DataInterface>, action) => {
      state.secondData = action.payload;
    },
    setUserInfo: (state: WritableDraft<DataInterface>, action) => {
      state.userInfo = action.payload;
    },
    setClear: (state: WritableDraft<DataInterface>) => {
      state.secondData = initialState.secondData;
      state.userInfo = initialState.userInfo;
    },
  },
});

export const {
  /**common */
  setSecondData: setSecondData,
  setUserInfo: setUserInfo,
  /**clear */
  setClear: setClear,
} = dataSlice.actions;

export default dataSlice.reducer;
