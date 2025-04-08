import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" data-aos="fade-up" data-aos-delay="300">
      <div className="footer-content">
        <p>&copy; {year} <span className="footer-name">thamizharasi</span> | Made with  React ⚛️</p>
        <p className="footer-tagline">Thanks for scrolling ✨ Let’s connect soon!</p>
        {/* <p className="footer-extra">Built by hand, styled with love 💅</p> */}
      </div>
    </footer>
  );
};

export default Footer;
