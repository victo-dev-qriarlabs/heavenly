export async function fetchHoroscope(selectedSign = 'aries') {
  const API_KEY = '99f2b3ec3cmshb5a6c2874fb8164p1ca84djsna47d69eb0a46';
  const API_URL = `https://horoscope-api.p.rapidapi.com/pt/${selectedSign}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'horoscope-api.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(API_URL, options);
    const data = await response.json();
    return { data: [data.title, data.date, data.text], error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
}
