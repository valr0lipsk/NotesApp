import React from "react";
import { useDispatch } from "react-redux";
import { removeTag } from "../store/tagsSlice";
import { setFilter } from "../store/notesSlice";

const Tag = ({ id, text }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="tags__tag"
      onClick={() => dispatch(setFilter({ filter: text }))}
    >
      <p>{text}</p>
      <button
        name="delete"
        onClick={() => dispatch(removeTag({ id }))}
      ></button>
    </div>
  );
};

export default Tag;
