import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Home from "./components/Pages/Home";
import Skills from "./components/Pages/Skills";
import About from "./components/Pages/About";
import { Helmet } from "react-helmet";
import Projects from "./components/Pages/Projects";
import WorkInProgress from "./components/Pages/WorkInProgress";
import Contact from "./components/Pages/Contact";

function App() {

  return (
    <>
      <Helmet>
        <title>Shubham Petwal | MERN-Stack Developer and AI Engineer</title>
        <meta
          name="description"
          content="I'm a passionate MERN stack developer with expertise in building dynamic web applications and providing AI driven solutions."
        />
        <meta
          name="keywords"
          content="Shubham, Portfolio, MERN-Stack Developer, MERN Stack, React, Node.js, Express, MongoDB, AI, LLms, Python, Django, NLP"
        />
        <meta property="og:url" content="https://developerbipin.netlify.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Shubham Petwal | Your Trusted MERN-Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore my portfolio showcasing innovative solutions and expertise in MERN stack development with AI solutions."
        />
        <meta
          property="og:image"
          content="https://developerbipin.netlify.app/profilePicForOg.jpg"
        />
        <meta property="og:image:width" content="670" />
        <meta property="og:image:height" content="534" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://developerbipin.netlify.app"
        />
        <meta name="twitter:title" content="Shubham Petwal | Software Developer and AI Engineer" />
        <meta
          name="twitter:description"
          content="I'm a passionate Software developer creating innovative web applications with AI driven solutions."
        />
        <meta
          name="twitter:image"
          content="https://developerbipin.netlify.app/profilePicForOg.jpg"
        />
      </Helmet>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/working-in-progress" element={<WorkInProgress />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
