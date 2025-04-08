import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home" data-aos="fade-down">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span>Thamizharasi 👋</span></h1>
          <h2>Full Stack Developer | Open to Work </h2>
          <p className="hero-sub">Crafting pixel-perfect UIs & scalable backends 💻</p>
          <a href="/Thamizharasi_Resume.pdf" download className="resume-btn">Download Resume 📄</a>
        </div>
        <div className="hero-image">
          <img src="/profile.jpg" alt="Princy Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
