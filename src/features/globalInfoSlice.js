import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: false,
};

const globalInfoSlice = createSlice({
  name: "globalInfo",
  initialState,
  reducers: {
    switchIsMobile: (state, { payload }) => {
      state.isMobile = payload;
    },
  },
});

export const { switchIsMobile } = globalInfoSlice.actions;
export const selectIsMobile = (state) => state.globalInfo.isMobile;
export default globalInfoSlice.reducer;
