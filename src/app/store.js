import { configureStore } from "@reduxjs/toolkit";
import buttonsSlice from "../features/buttonsSlice";
import globalInfoSlice from "../features/globalInfoSlice";
import textSlice from "../features/textSlice";

export default configureStore({
  reducer: {
    text: textSlice,
    buttons: buttonsSlice,
    globalInfo: globalInfoSlice,
  },
});
