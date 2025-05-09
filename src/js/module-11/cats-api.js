// 1) Створити сторінку яка при завантаженні робить запит на бекенд і оримує
//  *  всі доступні breeds. https://api.thecatapi.com/v1/breeds

export function fetchAllCats() {
  const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
  const API_KEY =
    'live_dB9EjNMXJC1kN0GtpOShvFca5A7X51c3NBy6d7FTMs0vGP4qqpRY1JTFlKxiCMmC';

  return fetch(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .catch(error => {
      console.log(error);
    });
}

export function fetchRandomCats() {
  const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
  const API_KEY =
    'live_dB9EjNMXJC1kN0GtpOShvFca5A7X51c3NBy6d7FTMs0vGP4qqpRY1JTFlKxiCMmC';

  const params = new URLSearchParams({
    limit: 20,
    api_key: API_KEY,
  });
  return fetch(`${BASE_URL}?${params}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Wrong request');
      }
      return res.json();
    })
    .catch(error => {
      console.log(error);
    });
}

export function fetchRandomDogs() {
  const BASE_URL = 'https://api.thedogapi.com/v1/images/search';
  const API_KEY =
    'live_dB9EjNMXJC1kN0GtpOShvFca5A7X51c3NBy6d7FTMs0vGP4qqpRY1JTFlKxiCMmC';

  const params = new URLSearchParams({
    limit: 20,
    api_key: API_KEY,
  });
  return fetch(`${BASE_URL}?${params}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Wrong request');
      }
      return res.json();
    })
    .catch(error => {
      console.log(error);
    });
}
