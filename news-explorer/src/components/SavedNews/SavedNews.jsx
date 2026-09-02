import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


import './SavedNews.css';

function SavedNews({ savedCards, currentUser, onLogout, onRemove }) {
  const keywords = [...new Set(
    savedCards.flatMap((c) => c.keyword ? [c.keyword] : [])
  )].slice(0, 3);

  const keywordsText = keywords.length > 0
    ? keywords.join(', ')
    : 'Sin palabras clave';

  return (
    <div className="saved-news-page">
      <Header
        isLoggedIn={true}
        currentUser={currentUser}
        onLogoutClick={onLogout}
        isSavedPage={true}
      />
      <main className="saved-news">
        <div className="saved-news__header">
          <p className="saved-news__label">Artículos guardados</p>
          <h1 className="saved-news__title">
            {currentUser?.username || 'Usuario'}, tienes {savedCards.length} artículo{savedCards.length !== 1 ? 's' : ''} guardado{savedCards.length !== 1 ? 's' : ''}
          </h1>
          <p className="saved-news__keywords">
            Por palabras clave: <strong>{keywordsText}</strong>
          </p>
        </div>
        {savedCards.length === 0 ? (
          <div className="saved-news__empty">
            <p className="saved-news__empty-text">No tienes artículos guardados aún.</p>
          </div>
        ) : (
          <ul className="saved-news__list">
            {savedCards.map((card, index) => (
              <li key={card.url || index} className="card saved-card">
                <a className="card__link" href={card.url} target="_blank" rel="noreferrer noopener">
                  <div className="card__image-container">
                    <img
                      className="card__image"
                      src={card.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80'}
                      alt={card.title}
                    />
                    {card.keyword && (
                      <span className="saved-card__keyword">{card.keyword}</span>
                    )}
                    <button
                      className="saved-card__remove"
                      type="button"
                      onClick={(e) => { e.preventDefault(); onRemove(card.url); }}
                      aria-label="Eliminar artículo"
                    >
                      🗑
                    </button>
                  </div>
                  <div className="card__info">
                    <p className="card__date">
                      {card.publishedAt ? new Date(card.publishedAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                    </p>
                    <h3 className="card__title">{card.title}</h3>
                    <p className="card__description">{card.description}</p>
                    <p className="card__source">{card.source?.name || ''}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default SavedNews;
