import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register({ isOpen, onClose, onRegister, onSwitchToLogin, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password, username);
  };

  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} title="Inscribirse" buttonText="Inscribirse" onSubmit={handleSubmit}>
      <label className="popup__label" htmlFor="reg-email">Correo electrónico</label>
      <input className="popup__input" id="reg-email" type="email" placeholder="Ingresa tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label className="popup__label" htmlFor="reg-password">Contraseña</label>
      <input className="popup__input" id="reg-password" type="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <label className="popup__label" htmlFor="reg-username">Nombre de usuario</label>
      <input className="popup__input" id="reg-username" type="text" placeholder="Ingresa tu nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
      {error && <span className="popup__error">{error}</span>}
      <p className="popup__switch">
        ¿Ya eres miembro?{' '}
        <button className="popup__switch-link" type="button" onClick={onSwitchToLogin}>Inicia sesión</button>
      </p>
    </PopupWithForm>
  );
}

export default Register;
