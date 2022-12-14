import { useState } from "react";
import { motion } from "framer-motion";
import "./About.css"


const About = () => {
  const [isShown, setIsShow] = useState(false);
  const handleClick = (event) => {
    setIsShow((current) => !current);
  };

  const [rotation, setRotation] = useState(0);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <div className="main-section" onClick={handleClick}>
      <p className="aboutPartOne">
        Born in 1987 at Stockholm, Sweden.
        <br />
        <br />
        With an interest in all things technical from a young age.
        <br />
        <br />
        My first bout with programming was running and hosting a private MMORPG
        server of Ragnarok Online as a teenager.
        <br />
        <br />
        I learned some C++, MySQL and PHP in the process.
        <br />
        <br />
        Then my carrer shifted towards coordination, project management and
        training of staff on IT systems and applications.
        <br />
        <br />
        I felt detached from actual technology and started taking classes in
        programming at Komvux.
        <br />
        <br />
        Completing two courses that focused on HTML, CSS and Javascript, two on
        the subject of C# and one on PHP.
      </p>
 
      
        <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="aboutPartTwo">
          Then came <b>{"</ Salt >"}</b>
          <br />
          <br />
          I had followed their newsletter for about two years before I felt the
          time was right and I applied.
          <br />
          <br />
          The stars aligned, I got accepted and completed their three months  
          {" ( of pretty intense )"} bootcamp in Javascript.
          <br />
          <br />
          And I feel I have found <b>home</b> in my return to programming and
          development.
        </motion.p>
    
    </div>
    </motion.div>
  );
};



export default About;
