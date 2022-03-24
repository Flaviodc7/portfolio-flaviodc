import React from "react";
import "./testimonials.css";
import { data } from "./testimonial-list";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h3>Reseñas de Clientes</h3>
      <h2>Testimonios</h2>

      <div className="container testimonials__container">
        {
        data.map(
          ({ avatar, name, review },
          index) => {
            return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar 1" />
              </div>
              <h3 className="client__name">{name}</h3>
              <small className="client__review">{review}</small>
            </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Testimonials;
