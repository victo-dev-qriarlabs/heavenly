import React from 'react';
import zodiaco from "../../assets/zodiaco.png";

function Introducao() {
  return (
    <div className='overflow-hidden mt-20 w-full h-[600px] bg-cover bg-center flex items-center justify-center relative'
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 text-center px-8 py-12'> 
        <h1 className='text-3xl font-bold mb-4 text-white'>HEAVENLY</h1>
        <p className='text-white mb-6 text-sm'>
          Descubra os segredos do cosmos com nossas previsões diárias. Na Heavenly, explore como as estrelas e planetas influenciam sua vida.
        </p>
        <img src={zodiaco} alt="Zodiaco" className='mx-auto rotating-image ' /> 
      </div>
    </div>
  );
}

export default Introducao;
