import React from 'react';
import './ContactInfo.css';
import { FaPhoneAlt, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section className="contactinfo-section" id="contact" data-aos="fade-up">
      <h2 className="section-title">Get in Touch 📞</h2>
      <div className="contactinfo-cards">
        <div className="contact-card">
          <FaPhoneAlt />
          <p>+91 7867830602</p>
        </div>
        <a
  className="contact-card"
  href="https://github.com/Thamizharasi2"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub />
  <span>GitHub</span>
</a>


        <a
          className="contact-card"
          href="https://www.linkedin.com/in/thamizharasi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a href="/public/Thamizharasi_Resume.pdf" download className="resume-btn">
  Download Resume 📄
</a>
      </div>
    </section>
  );
};

export default ContactInfo;
