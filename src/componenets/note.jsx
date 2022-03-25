import React from "react";
import { Link } from "react-router-dom";

const note = ({ note }) => {
  return (
    <div className="note">
      <Link to={`/notes/${note.id}`}>
        <h1>{note.title}</h1>
        {note.body.length >= 80 ? (
          <p>{note.body.slice(0, 80)}...</p>
        ) : (
          <p>{note.body}</p>
        )}
      </Link>
    </div>
  );
};

export default note;
