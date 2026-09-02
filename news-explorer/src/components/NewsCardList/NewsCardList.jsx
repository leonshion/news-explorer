import React, { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { INITIAL_CARDS_COUNT, LOAD_MORE_COUNT } from '../../utils/constants';
import './NewsCardList.css';

function NewsCardList({ cards, isLoggedIn, onBookmark }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_CARDS_COUNT);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <section className="results">
      <h2 className="results__title">Resultados de la búsqueda</h2>
      <ul className="results__list">
        {cards.slice(0, visibleCount).map((card, index) => (
          <NewsCard
            key={card.url || index}
            card={card}
            isLoggedIn={isLoggedIn}
            onBookmark={onBookmark}
          />
        ))}
      </ul>
      {visibleCount < cards.length && (
        <button className="results__button" type="button" onClick={handleShowMore}>
          Mostrar más
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
