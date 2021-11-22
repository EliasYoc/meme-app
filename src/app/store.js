import { configureStore } from "@reduxjs/toolkit";
import textSlice from "../features/textSlice";

export default configureStore({
  reducer: {
    text: textSlice,
  },
});
