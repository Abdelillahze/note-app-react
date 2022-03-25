import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGet from "../hooks/useGet";
import { useNavigate } from "react-router-dom";

const Note = () => {
  const { id } = useParams();
  const [data, isData] = useGet();
  const [notes, setNotes] = useState(null);
  const [isEdit, setIsEdit] = useState(true);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const history = useNavigate();

  const setEdit = () => {
    if (!isEdit) {
      notes[id - 1].title = title;
      notes[id - 1].body = body;
      localStorage.setItem("notes", JSON.stringify(notes));
    }
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    setNotes(data);
  }, [data]);

  useEffect(() => {
    if (notes != null) {
      setTitle(notes[id - 1].title);
      setBody(notes[id - 1].body);
    }
  }, [notes]);

  const editTitle = (e) => {
    setTitle(e.target.value);
  };

  const editBody = (e) => {
    setBody(e.target.value);
  };

  const removeNote = () => {
    let newNotes = notes.filter((e) => e.id !== +id);
    console.log(newNotes);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    history("/");
  };

  return (
    <div className="note-details">
      <div className="container">
        <section>
          <input
            type="text"
            value={title == null ? "" : title}
            onChange={editTitle}
            readOnly={isEdit}
          />
          <div className="buttons">
            {isEdit ? (
              <button onClick={setEdit}>Edit</button>
            ) : (
              <button onClick={setEdit}>Editing...</button>
            )}
            <button onClick={removeNote}>Remove</button>
          </div>
        </section>
        <textarea
          value={body == null ? "" : body}
          onChange={editBody}
          readOnly={isEdit}
        ></textarea>
      </div>
    </div>
  );
};

export default Note;
