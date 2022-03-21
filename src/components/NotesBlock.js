import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../store/notesSlice";
import Note from "./Note";

function NotesBlock() {
  const notes = useSelector((state) => state.notes.notes);
  const filter = useSelector((state) => state.notes.filter);

  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        className="main__button"
        onClick={() => {
          dispatch(setFilter(""));
        }}
      >
        Show all
      </button>
      <div className="main__notes">
        {notes.map((note) => {
          if (filter) {
            if (note.text.includes(filter) === true) {
              return <Note key={note.id} {...note} /> ?? null;
            }
          } else return <Note key={note.id} {...note} />;
        })}
      </div>
    </>
  );
}

export default NotesBlock;
