import React from "react";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  AOS.init();
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
