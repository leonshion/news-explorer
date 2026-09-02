import React from 'react';
import './Header.css';

function Header({ isLoggedIn, currentUser, onLoginClick, onLogoutClick, isSavedPage }) {
  return (
    <header className={`header ${isSavedPage ? 'header_light' : ''}`}>
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>
        <nav className="header__nav">
          <ul className="header__links">
            <li>
              <a className={`header__link ${!isSavedPage ? 'header__link_active' : ''}`} href="/">
                Inicio
              </a>
            </li>
            {isLoggedIn && (
              <li>
                <a className={`header__link ${isSavedPage ? 'header__link_active header__link_dark' : ''}`} href="/saved-news">
                  Artículos guardados
                </a>
              </li>
            )}
          </ul>
          {isLoggedIn ? (
            <button className={`header__button ${isSavedPage ? 'header__button_dark' : ''}`} type="button" onClick={onLogoutClick}>
              {currentUser?.username || 'Usuario'} ↗
            </button>
          ) : (
            <button className="header__button" type="button" onClick={onLoginClick}>
              Iniciar sesión
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
