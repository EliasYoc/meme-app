import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topText: "",
  bottomText: "",
  titlesFontSize: 16,
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    editTitle: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const { editTitle } = textSlice.actions;
export const selectTitles = (state) => state.text;
export default textSlice.reducer;
