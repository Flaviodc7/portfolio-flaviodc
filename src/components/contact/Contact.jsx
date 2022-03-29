import React, { useRef } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessage",
        "templatemail",
        form.current,
        "user_OB1ipGahIdImLamqOgLLO"
      )
      .then(
        (result) => {
          alert("Mensaje enviado");
          e.target.reset();
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje");
        }
      );
  };
  return (
    <section id="contact">
      <h3>Ponete en contacto</h3>
      <h2>Contactame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>flaviodc@live.com.ar</h5>
            <a
              href="mailto:flaviodc@live.com.ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar un mensaje
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+54 11-2254-4765</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+541122544765"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar un mensaje
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            required
          />
          <input type="email" name="email" placeholder="Tu Mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Ingrese su mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
