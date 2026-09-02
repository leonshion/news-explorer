import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__circle"></div>
      <p className="preloader__text">Buscando noticias...</p>
    </section>
  );
}

export default Preloader;
