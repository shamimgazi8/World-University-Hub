import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDetailPopup: false,
  detailSlug: "",
  detailTitle: "",
};
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsDetailPopup: (state, action) => {
      state.isDetailPopup = action.payload.isDetailPopup;
      state.detailSlug = action.payload.detailSlug;
      state.detailTitle = action.payload.detailTitle;
    },
  },
});

export const { newsDetailPopup } = newsSlice.actions;
export default newsSlice.reducer;
