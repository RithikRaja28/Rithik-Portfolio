import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero.jsx/Hero";
import About from "./components/About/About";
import Technology from "./components/Technologies/Technology";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Stats from "./components/Stats/Stats";
import ResumeShowcase from "./components/ResumeShowcase/ResumeShowcase";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-200 selection:text-cyan-800">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Technology />
        <Experience />
      <Project />
      <ResumeShowcase />
      <Contact />
      </div>
    </div>
  );
};

export default App;
