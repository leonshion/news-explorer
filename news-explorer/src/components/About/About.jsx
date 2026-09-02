import React from 'react';
import authorPhoto from '../../images/author.jpeg';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img
          className="about__image"
          src={authorPhoto}
          alt="Foto de Miriam Leon"
        />
        <div className="about__content">
          <h2 className="about__title">Acerca del autor</h2>
          <p className="about__text">
            Hola, soy <strong>Miriam Leon</strong>, fundadora de Indasocial y desarrolladora
            web full stack en formación con TripleTen. Me apasiona construir productos digitales
            que conectan marcas con creadores en la economía latina.
          </p>
          <p className="about__text">
            Tengo experiencia en React, Node.js, Express y MongoDB. A través de este proyecto
            aplico mis conocimientos en el desarrollo de aplicaciones web modernas, conectando
            APIs externas y construyendo interfaces responsivas con buenas prácticas de código.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
