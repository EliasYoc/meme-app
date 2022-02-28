import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uploadedSrcImg: null,
  editionText: {
    titlesFontSize: 16,
    titlesTextStroke: 0,
    alignText: "left",
    transformScale: "1",
    // si la cantidad default es 2 entonces agregar 2 objetos a inputTxtList
    inputAmount: 2,
    inputTextList: {
      input0: "",
      input1: "",
      // ... los siguientes son dinamicos
    },
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
    addInput: (state, { payload }) => {
      return {
        ...state,
        editionText: {
          ...state.editionText,
          inputAmount: payload,
        },
      };
    },
    editTitle: (state, action) => {
      return {
        ...state,
        editionText: {
          ...state.editionText,
          // [action.payload.name]: action.payload.value,
          inputTextList: {
            ...state.editionText.inputTextList,
            [action.payload.name]: action.payload.value,
          },
        },
      };
    },
    editInputRange: (state, action) => {
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
    clearText: (state) => {
      return {
        ...state,
        editionText: initialState.editionText,
        picker: initialState.picker,
      };
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
    changeCssValue: (state, action) => {
      return {
        ...state,
        editionText: {
          ...state.editionText,
          [action.payload.cssPropName]: action.payload.minValue,
        },
      };
    },
    clearAllEdition: () => {
      return { ...initialState };
    },
  },
});

export const {
  editTitle,
  editInputRange,
  setSrcImg,
  displayOrHidePicker,
  setPickerColor,
  changeCssValue,
  clearAllEdition,
  clearText,
  addInput,
} = textSlice.actions;
export const selectTitles = (state) => state.text.editionText;
export const selectSrcImage = (state) => state.text.uploadedSrcImg;
export const selectColorPicker = (state) => state.text.picker;
export default textSlice.reducer;
