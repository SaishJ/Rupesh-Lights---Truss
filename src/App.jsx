import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
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
