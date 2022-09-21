import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <motion.div
          className="container text-center  bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 7 }}
        >
          <h1 className="title__name">Ulf Björkman</h1>

 
        <p className="title__occupation">Full-Stack Developer</p>
        </motion.div>
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
