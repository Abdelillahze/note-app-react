import React, { useEffect, useState } from "react";
import Note from "../componenets/note";
import useGet from "../hooks/useGet";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, isData] = useGet();
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    setNotes(data);
  }, [data]);

  return (
    <section className="home">
      <div className="container">
        <h1>Your Notes</h1>
        {isData && (
          <p className="empty">
            No Notes, <Link to="/create">let's begin</Link>
          </p>
        )}
        <div className="notes">
          {notes && notes.map((note) => <Note note={note} key={note.id} />)}
        </div>
      </div>
    </section>
  );
};

export default Home;
