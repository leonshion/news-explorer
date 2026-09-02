import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login({ isOpen, onClose, onLogin, onSwitchToRegister, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} title="Iniciar sesión" buttonText="Iniciar sesión" onSubmit={handleSubmit}>
      <label className="popup__label" htmlFor="login-email">Correo electrónico</label>
      <input className="popup__input" id="login-email" type="email" placeholder="Ingresa tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label className="popup__label" htmlFor="login-password">Contraseña</label>
      <input className="popup__input" id="login-password" type="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
      {error && <span className="popup__error">{error}</span>}
      <p className="popup__switch">
        ¿Aún no eres miembro?{' '}
        <button className="popup__switch-link" type="button" onClick={onSwitchToRegister}>Inscríbete</button>
      </p>
    </PopupWithForm>
  );
}

export default Login;
