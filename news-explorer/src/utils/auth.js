const DEMO_ARTICLES = [
  {
    title: 'Todo el mundo necesita un lugar de reflexión en la naturaleza',
    description: 'Desde que leí el influyente libro de Richard Louv, "El último niño en el bosque", la idea de tener un "lugar de reflexión" especial para mí se me ha quedado grabada. Este consejo, que...',
    url: 'https://treehugger.com/article-1',
    urlToImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80',
    publishedAt: '2020-11-04T00:00:00Z',
    source: { name: 'TREEHUGGER' },
    keyword: 'Naturaleza',
  },
  {
    title: 'La naturaleza te hace mejor',
    description: 'Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas.',
    url: 'https://nationalgeographic.com/article-2',
    urlToImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
    publishedAt: '2019-02-19T00:00:00Z',
    source: { name: 'NATIONAL GEOGRAPHIC' },
    keyword: 'Naturaleza',
  },
  {
    title: 'Fotos nostálgicas hechas por turistas en los parques nacionales de Estados Unidos',
    description: 'Uri Løvevild Golman y Helle Løvevild Golman son exploradores de National Geographic y fotógrafos de conservación que acaban de completar un proyecto y un libro que llaman su...',
    url: 'https://nationalgeographic.com/article-3',
    urlToImage: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80',
    publishedAt: '2020-10-19T00:00:00Z',
    source: { name: 'NATIONAL GEOGRAPHIC' },
    keyword: 'Yellowstone',
  },
  {
    title: 'El Grand Teton renueva el histórico Camino de la Cresta',
    description: '"La unión de los senderos de la Cascada y del Cañón de la Muerte en sus picos tuvo lugar el 1 de octubre de 1933, y marcó el primer paso en la realización de un plan por el que el...',
    url: 'https://nationalparkstraveler.com/article-4',
    urlToImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80',
    publishedAt: '2020-11-04T00:00:00Z',
    source: { name: 'NATIONAL PARKS TRAVELER' },
    keyword: 'Parques',
  },
  {
    title: 'Los científicos no saben por qué la estrella polar es tan extraña',
    description: 'Los seres humanos se han basado durante mucho tiempo en la estrella polar para adentrarse hacia nuevas fronteras, navegar hasta el fin del mundo y encontrar el camino de vuelta...',
    url: 'https://treehugger.com/article-5',
    urlToImage: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=80',
    publishedAt: '2020-03-16T00:00:00Z',
    source: { name: 'TREEHUGGER' },
    keyword: 'Fotografía',
  },
];

export const registerUser = (email, password, username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('ne_users') || '[]');
      const exists = users.find((u) => u.email === email);
      if (exists) {
        reject(new Error('Este correo ya está registrado'));
        return;
      }
      const newUser = { email, password, username };
      users.push(newUser);
      localStorage.setItem('ne_users', JSON.stringify(users));
      // Precargar artículos demo para usuario nuevo
      const key = `ne_saved_${email}`;
      localStorage.setItem(key, JSON.stringify(DEMO_ARTICLES));
      localStorage.setItem('ne_current_user', JSON.stringify(newUser));
      resolve(newUser);
    }, 500);
  });
};

export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('ne_users') || '[]');
      const user = users.find((u) => u.email === email && u.password === password);
      if (!user) {
        reject(new Error('Email o contraseña incorrectos'));
        return;
      }
      localStorage.setItem('ne_current_user', JSON.stringify(user));
      resolve(user);
    }, 500);
  });
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('ne_current_user');
  return user ? JSON.parse(user) : null;
};

export const logoutUser = () => {
  localStorage.removeItem('ne_current_user');
};

export const saveArticle = (article) => {
  const user = getCurrentUser();
  if (!user) return;
  const key = `ne_saved_${user.email}`;
  const saved = JSON.parse(localStorage.getItem(key) || '[]');
  const exists = saved.find((a) => a.url === article.url);
  if (!exists) {
    saved.push(article);
    localStorage.setItem(key, JSON.stringify(saved));
  }
};

export const getSavedArticles = () => {
  const user = getCurrentUser();
  if (!user) return [];
  const key = `ne_saved_${user.email}`;
  return JSON.parse(localStorage.getItem(key) || '[]');
};

export const removeArticle = (articleUrl) => {
  const user = getCurrentUser();
  if (!user) return;
  const key = `ne_saved_${user.email}`;
  const saved = JSON.parse(localStorage.getItem(key) || '[]');
  const updated = saved.filter((a) => a.url !== articleUrl);
  localStorage.setItem(key, JSON.stringify(updated));
};
