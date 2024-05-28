import { createSlice } from "@reduxjs/toolkit";

export interface StateType {
  compareUNIVERSITY: number | any;
  compareCOURSE: number | any;
}

const initialState = {
  compareUNIVERSITY: 0,
  compareCOURSE: 0,
};

export const compareSlice = createSlice({
  name: "compare_Slice",
  initialState,

  reducers: {
    compareData: (state, action) => {
      state.compareUNIVERSITY = action.payload.compareUNIVERSITY;
      state.compareCOURSE = action.payload.compareCOURSE;
    },
  },
});

export const { compareData } = compareSlice.actions;

export default compareSlice.reducer;
