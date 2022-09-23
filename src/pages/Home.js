import React from "react";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 7 }}
  >
    <div className="main-section">
      <h1>Welcome to my portfolio</h1>
    </div>
    </motion.div>
  );
}

export default Home;
