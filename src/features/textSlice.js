import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uploadedSrcImg: null,
  editionText: {
    topText: "",
    bottomText: "",
    titlesFontSize: 16,
    titlesTextStroke: 0,
    alignText: "left",
  },
  picker: {
    displayColorPicker: false,
    color: {
      r: "255",
      g: "255",
      b: "255",
      a: "1",
    },
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
    clearEdition: () => {
      return { ...initialState };
    },
    displayOrHidePicker: (state, action) => {
      return {
        ...state,
        picker: {
          ...state.picker,
          displayColorPicker: action.payload,
        },
      };
    },
    setPickerColor: (state, action) => {
      return {
        ...state,
        picker: {
          ...state.picker,
          color: action.payload,
        },
      };
    },
    changeAlignText: (state, action) => {
      return {
        ...state,
        editionText: {
          ...state.editionText,
          alignText: action.payload,
        },
      };
    },
  },
});

export const {
  editTitle,
  setSrcImg,
  displayOrHidePicker,
  setPickerColor,
  changeAlignText,
} = textSlice.actions;
export const selectTitles = (state) => state.text.editionText;
export const selectSrcImage = (state) => state.text.uploadedSrcImg;
export const selectColorPicker = (state) => state.text.picker;
export default textSlice.reducer;
