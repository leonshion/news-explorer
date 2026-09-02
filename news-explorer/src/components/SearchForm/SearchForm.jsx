import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <section className="search">
      <div className="search__overlay"></div>
      <div className="search__content">
        <h1 className="search__title">¿Qué está pasando en el mundo?</h1>
        <p className="search__subtitle">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu biblioteca personal.
        </p>
        <form className="search__form" onSubmit={handleSubmit}>
          <input
            className="search__input"
            type="text"
            placeholder="Término de búsqueda"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button className="search__button" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
