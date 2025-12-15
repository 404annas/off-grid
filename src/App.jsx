import React from 'react'
import "./App.css"
import { Routes, Route } from "react-router";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Contact from './pages/Contact/Contact';
// [Urdu/English Comment] FloatingCTA component import kiya (Imported FloatingCTA component)
import FloatingCTA from './components/FloatingCTA';

export default function App() {
  return (
    // Added a React Fragment or div to wrap both Routes and FloatingCTA
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/project-page/:id" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* [Urdu/English Comment] Floating icons jo har page par dikhenge (Floating icons that will appear on every page) */}
      <FloatingCTA />
    </>
  )
}