import React, { useState, useEffect } from 'react';


function Teste({ selectedSign }) {
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '99f2b3ec3cmshb5a6c2874fb8164p1ca84djsna47d69eb0a46';

  const fetchHoroscope = async (sign) => {
    const API_URL = `https://horoscope-api.p.rapidapi.com/pt/${sign}`;
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
      setHoroscopeData(data);
      console.log(data);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedSign) {
      fetchHoroscope(selectedSign);
    }
  }, [selectedSign]); // Refetch horoscope when selectedSign changes

  return (
    <div>
      <h1>Horóscopo</h1>
      {error && <p>Error: {error.message}</p>}
      {horoscopeData ? (
        <div>
          <h2>{horoscopeData.title}</h2>
          <p>Data: {horoscopeData.date}</p>
          <p>{horoscopeData.text}</p>
        </div>
      ) : (
        <p>{selectedSign ? 'Carregando...' : 'Selecione um signo para ver o horóscopo'}</p>
      )}
    </div>
  );
}

export default Teste;
