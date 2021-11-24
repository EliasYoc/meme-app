import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uploadedSrcImg: null,
  editionText: {
    topText: "",
    bottomText: "",
    titlesFontSize: 16,
    titlesTextStroke: 0,
  },
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    editTitle: (state, action) => {
      return {
        ...state,
        editionText: {
          ...state.editionText,
          [action.payload.name]: action.payload.value,
        },
      };
    },
    setSrcImg: (state, action) => {
      return { ...state, uploadedSrcImg: action.payload };
    },
    clearEdition: (state, action) => {
      return { ...initialState };
    },
  },
});

export const { editTitle, setSrcImg } = textSlice.actions;
export const selectTitles = (state) => state.text.editionText;
export const selectSrcImage = (state) => state.text.uploadedSrcImg;
export default textSlice.reducer;
