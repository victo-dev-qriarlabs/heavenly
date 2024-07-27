// SignButtons.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const signs = [
  { name: 'aquario', label: 'Aquário' },
  { name: 'aries', label: 'Áries' },
  { name: 'touro', label: 'Touro' },
  { name: 'gemeos', label: 'Gêmeos' },
  { name: 'cancer', label: 'Câncer' },
  { name: 'leao', label: 'Leão' },
  { name: 'virgem', label: 'Virgem' },
  { name: 'libra', label: 'Libra' },
  { name: 'escorpiao', label: 'Escorpião' },
  { name: 'sagitario', label: 'Sagitário' },
  { name: 'capricornio', label: 'Capricórnio' },
  { name: 'peixes', label: 'Peixes' }
];

const SignButtons = () => {
  const navigate = useNavigate();

  const handleSelectSign = (sign) => {
    navigate(`/fetch/${sign}`);
  };

  return (
    <div>
      {signs.map((sign) => (
        <button key={sign.name} onClick={() => handleSelectSign(sign.name)}>
          {sign.label}
        </button>
      ))}
    </div>
  );
};

export default SignButtons;
