// HoroscopeDisplay.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const HoroscopeDisplay = () => {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    return <p>Horóscopo não disponível.</p>;
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <p>Data: {data.date}</p>
      <p>{data.text}</p>
    </div>
  );
};

export default HoroscopeDisplay;
