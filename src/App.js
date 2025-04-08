// App.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// Component imports
import Navbar from './components/Navbar'; // ✅ You missed this import!
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';

import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      {/* ✅ Give section ids to enable scroll navigation */}
      <div className="app-container">
  <main>
    {/* All your sections like Hero, About, Projects, Contact */}

      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="internship"><Internship /></div>
     <div id="ContactInfo"><ContactInfo /></div>
  </main>
  <Footer />
</div>
     
      {/* <Footer /> */}
    </>
  );
}

export default App;
