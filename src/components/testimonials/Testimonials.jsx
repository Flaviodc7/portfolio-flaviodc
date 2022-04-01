import React from "react";
import "./testimonials.css";
import { data } from "./testimonial-list";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h3>Reseñas de Clientes</h3>
      <h2>Testimonios</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
        data.map(
          ({ testimonialPhoto, alt, name, review },
          index) => {
            return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={testimonialPhoto} alt={alt} />
              </div>
              <h3 className="client__name">{name}</h3>
              <small className="client__review">{review}</small>
            </SwiperSlide >
            )
          })
         }
      </Swiper>
    </section>
  );
};

export default Testimonials;
