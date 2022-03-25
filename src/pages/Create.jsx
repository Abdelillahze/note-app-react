import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [isPanding, setIsPanding] = useState(null);
  const history = useNavigate();

  const getID = () => {
    return notes.length + 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    setIsPanding(true);

    setTimeout(() => {
      localStorage.setItem(
        "notes",
        JSON.stringify([...notes, { title: title, body: body, id: getID() }])
      );
      setNotes(JSON.parse(localStorage.getItem("notes")));
      setIsPanding(false);
      history("/");
    }, 1000);
  };

  return (
    <section className="create">
      <h1>Create New Note!</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Body: </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          {isPanding ? (
            <button style={{ cursor: "not-allowed" }} disabled>
              Adding note...
            </button>
          ) : (
            <button>Submit</button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Create;
