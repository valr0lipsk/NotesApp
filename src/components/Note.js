import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNote, editNote } from "../store/notesSlice";
import { addNewTag } from "./Form";

const Note = ({ id, text }) => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags.tags);
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleSave = () => {
    addNewTag(newText, tags, dispatch);
    dispatch(editNote({ id, newText }));
    setEdit(false);
  };

  const handleKeyUp = (e) => {
    if (e.code === "Space") {
      addNewTag(newText, tags, dispatch);
    }
  };

  useEffect(() => {
    const formattedText = newText;
    formattedText.split(" ").forEach((elem, index) => {
      if (elem.startsWith("#")) {
        formattedText.split(" ").splice(index - 1, 0, "<b>");
        formattedText.split(" ").splice(index + 1, 0, "<b/>");
      }
    });
    setNewText(formattedText);
  }, [newText]);

  if (edit) {
    return (
      <div className="notes__note editable">
        <div className="note__header">
          <button
            className="header__btn"
            name="save"
            onClick={handleSave}
          ></button>
          <button className="header__btn" name="delete"></button>
        </div>
        <div className="note__body">
          <textarea
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyUp={handleKeyUp}
          ></textarea>
        </div>
      </div>
    );
  }
  return (
    <div className="notes__note">
      <div className="note__header">
        <button
          className="header__btn"
          name="edit"
          onClick={() => setEdit(true)}
        ></button>
        <button
          className="header__btn"
          name="delete"
          onClick={() => dispatch(removeNote({ id }))}
        ></button>
      </div>
      <div className="note__body">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Note;
