import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    filter: "",
    jsonData: [],
  },
  reducers: {
    addNote(state, action) {
      state.notes.push({
        id: nanoid(),
        text: action.payload.text,
      });
      state.jsonData = JSON.stringify(state.notes);
    },
    removeNote(state, action) {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
      state.jsonData = JSON.stringify(state.notes);
    },
    editNote(state, action) {
      const note = state.notes.find((note) => note.id === action.payload.id);
      note.text = action.payload.newText;
      state.jsonData = JSON.stringify(state.notes);
    },
    setFilter(state, action) {
      state.filter = action.payload.filter;
    },
  },
});

export const { addNote, removeNote, setFilter, editNote } = notesSlice.actions;

export default notesSlice.reducer;
