import React, { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    const container = document.querySelector('.bolhas');
    const numBolhas = 100; // Número de bolinhas

    for (let i = 0; i < numBolhas; i++) {
      const bolha = document.createElement('span');
      const randomValue = Math.floor(Math.random() * 1000) + 1; // Valor aleatório entre 1 e 2000
      bolha.style.setProperty('--interacao', randomValue);
      container.appendChild(bolha);
    }
  }, []);

  return (
    <div>
      <div className="bolhas -z-20" >
        <span style={{ '--interacao': 1 }}></span>
      </div>
    </div>
  );
};



export default AnimatedBackground;
