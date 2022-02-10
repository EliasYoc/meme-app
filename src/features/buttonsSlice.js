import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAsideOpen: false,
};

const buttonsSlice = createSlice({
  name: "buttons",
  initialState,
  reducers: {
    openCloseAside: (state) => {
      state.isAsideOpen = !state.isAsideOpen;
    },
  },
});

export const { openCloseAside } = buttonsSlice.actions;
export const selectShowAside = (state) => state.buttons.isAsideOpen;
export default buttonsSlice.reducer;
