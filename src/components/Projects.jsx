import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <section className="projects-section" id="projects" data-aos="fade-up">
      <h2 className="section-title">Projects 💻</h2>
      <div className="projects-swiper-wrapper">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          <SwiperSlide className="project-slide">
            <h3>Online Voting System</h3><br/>
            <p>HTML+ CSS + JS + Spring Boot + MySQL</p>
          </SwiperSlide>
          <SwiperSlide className="project-slide">
            <h3>Meesho UI Clone</h3>
            <p>HTML + CSS + Bootstrap + JS</p>
          </SwiperSlide>
          <SwiperSlide className="project-slide">
            <h3>Employee Management System</h3>
            <p>Spring Boot + MySQL</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
