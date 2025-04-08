import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava , FaDatabase } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section" id="skills" data-aos="fade-up">
      <h2 className="section-title">Skills </h2>
      <div className="skills-wrapper">
        <div className="skills-track">
          {/* Duplicate the list twice for seamless scroll */}
          {[...Array(2)].map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="skill-card"><FaHtml5 /><p>HTML5</p></div>
              <div className="skill-card"><FaCss3Alt /><p>CSS3</p></div>
              <div className="skill-card"><FaJs /><p>JavaScript</p></div>
              <div className="skill-card"><FaReact /><p>React</p></div>
              <div className="skill-card"><FaDatabase /><p>MySQL</p></div>
              <div className="skill-card"><FaJava/><p>Java</p></div>

            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
