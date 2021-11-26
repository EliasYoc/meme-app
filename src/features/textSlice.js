import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uploadedSrcImg: null,
  editionText: {
    topText: "",
    bottomText: "",
    titlesFontSize: 16,
    titlesTextStroke: 0,
  },
  picker: {
    displayColorPicker: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
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
      console.log(action.payload);
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
  },
});

export const { editTitle, setSrcImg, displayOrHidePicker, setPickerColor } =
  textSlice.actions;
export const selectTitles = (state) => state.text.editionText;
export const selectSrcImage = (state) => state.text.uploadedSrcImg;
export const selectColorPicker = (state) => state.text.picker;
export default textSlice.reducer;
