import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h3>Reseñas de Clientes</h3>
      <h2>Testimonios</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar 1" />
          </div>
          <h3 className="client__name">name</h3>
            <small className="client__review">
              review
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials