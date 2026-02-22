import React from "react";
import "@/App.css";
import MatrixRain from "./components/MatrixRain";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data/mock";

function App() {
  return (
    <div className="App">
      <MatrixRain />
      <div className="scanline"></div>
      <Header />
      <Hero data={portfolioData} />
      <About data={portfolioData} />
      <Skills data={portfolioData} />
      <Experience data={portfolioData} />
      <Certifications data={portfolioData} />
      <Projects githubUsername="NSSMatta" />
      <Contact data={portfolioData} />
      <Footer data={portfolioData} />
    </div>
  );
}

export default App;
