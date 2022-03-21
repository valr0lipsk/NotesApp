import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../store/notesSlice";
import { addTag } from "../store/tagsSlice";
import Tag from "./Tag";

export const addNewTag = (text, tags, dispatch) => {
  const val = text.trim().split(" ");
  if (
    val.length === 1 &&
    val[0].startsWith("#") &&
    !Object.keys(tags).find((key) => tags[key].text === val[0])
  ) {
    return dispatch(addTag({ text: val[0] }));
  }
  for (let i = val.length - 1; i > 0; i--) {
    if (
      val[i].startsWith("#") &&
      !Object.keys(tags).find((key) => tags[key].text === val[i])
    ) {
      dispatch(addTag({ text: val[i] }));
      break;
    }
  }
};

const Form = () => {
  const [text, setText] = useState("");
  const tags = useSelector((state) => state.tags.tags);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    addNewTag(text, tags, dispatch);
    dispatch(addNote({ text }));
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.code === "Space") {
      addNewTag(text, tags, dispatch);
    }
  };

  return (
    <div className="main__add">
      <form className="add__form">
        <textarea
          name="text"
          value={text}
          className="form__input"
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        ></textarea>
        <button
          type="button"
          className="form__btn"
          onClick={handleClick}
        ></button>
      </form>
      <div className="add__tags">
        {tags.map((tag) => (
          <Tag key={tag.id} id={tag.id} text={tag.text} />
        ))}
      </div>
    </div>
  );
};

export default Form;
