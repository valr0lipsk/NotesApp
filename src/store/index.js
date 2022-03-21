import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import tagsReducer from "./tagsSlice";

export default configureStore({
  reducer: {
    notes: notesReducer,
    tags: tagsReducer,
  },
});
