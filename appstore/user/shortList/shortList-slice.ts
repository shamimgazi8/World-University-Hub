import { createSlice } from "@reduxjs/toolkit";

export interface StateType {
  listUNIVERSITY: number | any;
  listCOURSE: number | any;
}

const initialState: StateType = {
  listUNIVERSITY: 0,
  listCOURSE: 0,
};

export const shortListSlice = createSlice({
  name: "shortList_Slice",
  initialState,

  reducers: {
    shortListData: (state, action) => {
      state.listUNIVERSITY = action.payload.listUNIVERSITY;
      state.listCOURSE = action.payload.listCOURSE;
    },
  },
});

export const { shortListData } = shortListSlice.actions;

export default shortListSlice.reducer;
