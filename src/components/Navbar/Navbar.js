import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <h1 className="title__name">Ulf Björkman</h1>
        <p className="title__occupation">
          Full-Stack Developer
        </p>
      </div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </div>
  );
};

export default Navbar;
