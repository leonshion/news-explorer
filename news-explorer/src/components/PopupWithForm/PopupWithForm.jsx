import React, { useEffect } from 'react';
import './PopupWithForm.css';

function PopupWithForm({ isOpen, onClose, title, children, buttonText, onSubmit }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup" onClick={handleOverlay}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose} aria-label="Cerrar">✕</button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" onSubmit={onSubmit} noValidate>
          {children}
          <button className="popup__button" type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
