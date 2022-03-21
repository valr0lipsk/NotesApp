import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    tags: [],
    jsonData: [],
  },
  reducers: {
    addTag(state, action) {
      state.tags.push({
        id: nanoid(),
        text: action.payload.text,
      });
      state.jsonData = JSON.stringify(state.tags);
    },
    removeTag(state, action) {
      state.tags = state.tags.filter((tag) => tag.id !== action.payload.id);
      state.jsonData = JSON.stringify(state.tags);
    },
  },
});

export const { addTag, removeTag } = tagsSlice.actions;

export default tagsSlice.reducer;
