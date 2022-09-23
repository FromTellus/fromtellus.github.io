import { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css"

const Projects = () => {
  const [isShown, setIsShow] = useState(false);
  const handleClick = (event) => {
    setIsShow((current) => !current);
  };
  return (
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8 }}
      className="main-section" onClick={handleClick}>
        <h1 className="projectInfoHeading">SneakerSpot</h1>
        <div className="projectInfoParagraph">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <p>
            A bartering platform for sneaker enthusiasts. The application is
            full-stack, offering users secure authorization, a messaging
            service and complete CRUD control over their collection stored in
            our database.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="projectListContainer"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            This project was built using{" "}
          </motion.p>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="projectInfoList"
          >
            React
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
            className="projectInfoList"
          >
            Redux
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4 }}
            className="projectInfoList"
          >
            Node.js
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4.2 }}
            className="projectInfoList"
          >
            Express
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4.5 }}
            className="projectInfoList"
          >
            PostgreSQL
          </motion.li>
        </motion.ul>
      </div><motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3.5 }}
          src="https://i.ibb.co/8dfbFgG/ezgif-com-gif-maker.gif"
          alt="ezgif-com-gif-maker"
          border="0" />
      </motion.div>
 
  );
};

export default Projects;
