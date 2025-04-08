import React from 'react';
import './Internship.css';

const internships = [
  {
    title: 'Frontend Development Intern',
    company: 'Adaasteck Technologies',
    duration: 'August 2024 – September 2024',
    logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    details: [
      'Designed and implemented responsive, user-friendly web interfaces using HTML, CSS, and JavaScript.',
      'Collaborated with the UI/UX team to bring mockups and wireframes to life with pixel-perfect precision.',
    ],
  },
  {
    title: 'Software Developer / QA Intern',
    company: 'Tenth Planet Technologies',
    duration: 'October 2024 – November 2024',
    logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    details: [
      'Developed backend modules in Java and optimized existing code for scalability.',
      'Performed QA testing, identified bugs, and collaborated with dev teams to fix critical issues.',
      'Engaged in sprint planning and daily stand-ups using Agile methodology.',
    ],
  },
];

const Internship = () => {
  return (
    <section className="internship-section" id="internship" data-aos="fade-up">
      <h2 className="section-title">Internships 🛠️</h2>
      <div className="internship-container">
        {internships.map((item, index) => (
          <div className="internship-card" key={index}>
            <div className="internship-header">
              <img src={item.logo} alt={`${item.company} logo`} className="internship-logo" />
              <div className="internship-meta">
                <h3 className="internship-title">{item.title}</h3>
                <p className="internship-company">{item.company}</p>
                <p className="internship-duration">{item.duration}</p>
              </div>
            </div>
            <ul className="internship-details">
              {item.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
