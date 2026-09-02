import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import NewsCardList from './components/NewsCardList/NewsCardList';
import Preloader from './components/Preloader/Preloader';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SavedNews from './components/SavedNews/SavedNews';
import { searchNews } from './utils/api';
import {
  getCurrentUser,
  loginUser,
  registerUser,
  logoutUser,
  saveArticle,
  getSavedArticles,
  removeArticle,
} from './utils/auth';
import { NOT_FOUND_MESSAGE, ERROR_MESSAGE } from './utils/constants';
import './index.css';

function App() {
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activePopup, setActivePopup] = useState(null);
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');
  const [currentQuery, setCurrentQuery] = useState('');

  const isSavedPage = window.location.pathname === '/saved-news';

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      setSavedCards(getSavedArticles());
    }
  }, []);

  const handleSearch = (query) => {
    setIsLoading(true);
    setHasSearched(true);
    setErrorMessage('');
    setCards([]);
    setCurrentQuery(query);

    searchNews(query)
      .then((results) => setCards(results))
      .catch(() => setErrorMessage(ERROR_MESSAGE))
      .finally(() => setIsLoading(false));
  };

  const handleLogin = (email, password) => {
    setLoginError('');
    loginUser(email, password)
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
        setSavedCards(getSavedArticles());
        setActivePopup(null);
      })
      .catch((err) => setLoginError(err.message));
  };

  const handleRegister = (email, password, username) => {
    setRegisterError('');
    registerUser(email, password, username)
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
        setActivePopup(null);
      })
      .catch((err) => setRegisterError(err.message));
  };

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSavedCards([]);
    if (isSavedPage) window.location.href = '/';
  };

  const handleBookmark = (card) => {
    if (!isLoggedIn) {
      setActivePopup('login');
      return;
    }
    saveArticle({ ...card, keyword: currentQuery });
    setSavedCards(getSavedArticles());
  };

  const handleRemove = (articleUrl) => {
    removeArticle(articleUrl);
    setSavedCards(getSavedArticles());
  };

  const handleClosePopup = () => {
    setActivePopup(null);
    setLoginError('');
    setRegisterError('');
  };

  if (isSavedPage) {
    return (
      <>
        <SavedNews
          savedCards={savedCards}
          currentUser={currentUser}
          onLogout={handleLogout}
          onRemove={handleRemove}
        />
        <Login
          isOpen={activePopup === 'login'}
          onClose={handleClosePopup}
          onLogin={handleLogin}
          onSwitchToRegister={() => setActivePopup('register')}
          error={loginError}
        />
        <Register
          isOpen={activePopup === 'register'}
          onClose={handleClosePopup}
          onRegister={handleRegister}
          onSwitchToLogin={() => setActivePopup('login')}
          error={registerError}
        />
      </>
    );
  }

  return (
    <div className="page">
      <Header
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        onLoginClick={() => setActivePopup('login')}
        onLogoutClick={handleLogout}
      />
      <main className="main">
        <SearchForm onSearch={handleSearch} />
        {isLoading && <Preloader />}
        {!isLoading && hasSearched && errorMessage && (
          <section className="status-section">
            <p className="status-section__title">Algo salió mal</p>
            <p className="status-section__text">{errorMessage}</p>
          </section>
        )}
        {!isLoading && hasSearched && !errorMessage && cards.length === 0 && (
          <section className="status-section">
            <p className="status-section__title">No se ha encontrado nada</p>
            <p className="status-section__text">{NOT_FOUND_MESSAGE}</p>
          </section>
        )}
        {!isLoading && cards.length > 0 && (
          <NewsCardList
            cards={cards}
            isLoggedIn={isLoggedIn}
            onBookmark={handleBookmark}
          />
        )}
        <About />
      </main>
      <Footer />
      <Login
        isOpen={activePopup === 'login'}
        onClose={handleClosePopup}
        onLogin={handleLogin}
        onSwitchToRegister={() => setActivePopup('register')}
        error={loginError}
      />
      <Register
        isOpen={activePopup === 'register'}
        onClose={handleClosePopup}
        onRegister={handleRegister}
        onSwitchToLogin={() => setActivePopup('login')}
        error={registerError}
      />
    </div>
  );
}

export default App;
