import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2026 Miriam Leon, Powered by News API</p>
      <nav className="footer__nav">
        <ul className="footer__links">
          <li><a className="footer__link" href="/">Inicio</a></li>
          <li>
            <a className="footer__link" href="https://tripleten.com" target="_blank" rel="noreferrer noopener">
              TripleTen
            </a>
          </li>
        </ul>
        <ul className="footer__social">
          <li>
            <a className="footer__social-link" href="https://github.com/leonshion" target="_blank" rel="noreferrer noopener" aria-label="GitHub de Miriam Leon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.4c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>
          </li>
          <li>
            <a className="footer__social-link" href="https://www.facebook.com/indasocial_mx" target="_blank" rel="noreferrer noopener" aria-label="Facebook de Indasocial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.62v-7h-2.35v-2.69h2.35v-2a3.27 3.27 0 0 1 3.49-3.59 19.26 19.26 0 0 1 2.1.11v2.43h-1.44c-1.13 0-1.35.54-1.35 1.32v1.73h2.69L17.76 14h-2.34v7H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
