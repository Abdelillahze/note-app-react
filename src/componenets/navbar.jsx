import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const home = useRef(null);
  const create = useRef(null);

  useEffect(() => {
    direction();
  }, [location]);

  const direction = () => {
    if (location.pathname === "/") {
      create.current.classList.remove("active");
      home.current.classList.add("active");
    } else if (location.pathname === "/create") {
      home.current.classList.remove("active");
      create.current.classList.add("active");
    }
  };
  return (
    <header>
      <div className="container">
        <h1>Notes</h1>
        <ul>
          <li ref={home}>
            <Link to="/">Home</Link>
          </li>
          <li ref={create}>
            <Link to="/create">Create Note</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
