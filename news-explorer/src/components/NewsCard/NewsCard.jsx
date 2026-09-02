import React from 'react';
import './NewsCard.css';

function NewsCard({ card, isLoggedIn, onBookmark }) {
  const title = card.title || 'Sin título';
  const description = card.description || '';
  const source = card.source?.name || 'Fuente desconocida';
  const imageUrl = card.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80';
  const articleUrl = card.url || '#';
  const date = card.publishedAt
    ? new Date(card.publishedAt).toLocaleDateString('es-ES', {
        year: 'numeric', month: 'long', day: 'numeric',
      })
    : '';

  const handleBookmark = (e) => {
    e.preventDefault();
    if (onBookmark) onBookmark(card);
  };

  return (
    <li className="card">
      <a className="card__link" href={articleUrl} target="_blank" rel="noreferrer noopener">
        <div className="card__image-container">
          <img className="card__image" src={imageUrl} alt={title} />
          {isLoggedIn && (
            <button
              className="card__bookmark"
              type="button"
              onClick={handleBookmark}
              aria-label="Guardar artículo"
            >
              🔖
            </button>
          )}
          {!isLoggedIn && (
            <div className="card__tooltip">Inicia sesión para guardar artículos</div>
          )}
        </div>
        <div className="card__info">
          <p className="card__date">{date}</p>
          <h3 className="card__title">{title}</h3>
          <p className="card__description">{description}</p>
          <p className="card__source">{source}</p>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
