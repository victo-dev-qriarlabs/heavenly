import React, { useState, useEffect } from 'react';

function Teste() {
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = 'https://horoscope-api.p.rapidapi.com/pt/aquario';
  const API_KEY = '99f2b3ec3cmshb5a6c2874fb8164p1ca84djsna47d69eb0a46'; // Substitua por sua chave de API real

  const fetchHoroscope = async () => {
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'horoscope-api.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(API_URL, options);
      const data = await response.json(); // Parse response as JSON since it's likely JSON data
      setHoroscopeData(data);
      console.log(data); // Log the entire response data to the console
    } catch (error) {
      setError(error);
      console.error(error); // Log the error to the console
    }
  };

  useEffect(() => {
    fetchHoroscope();
  }, []); // Empty dependency array ensures fetching happens only once on mount

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {horoscopeData ? (
        <div>
          <h2>Your Daily Horoscope</h2>
          <pre>{JSON.stringify(horoscopeData, null, 2)}</pre> {/* Display the entire response data */}
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
}

export default Teste;
