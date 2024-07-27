// FetchHoroscope.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_KEY = '99f2b3ec3cmshb5a6c2874fb8164p1ca84djsna47d69eb0a46';

const FetchHoroscope = ({ selectedSign }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHoroscope = async () => {
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
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('API Data:', data); // Verifique os dados da API
        navigate('/horoscope', { state: { data } });
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    if (selectedSign) {
      fetchHoroscope();
    }
  }, [selectedSign, navigate]);

  return <p>Carregando...</p>;
};

export default FetchHoroscope;
