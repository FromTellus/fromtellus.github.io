import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/*" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
        <Footer />
      </div>
      <Particles options={particlesOptions} init={particlesInit} />
    </>
  );
}

export default App;
