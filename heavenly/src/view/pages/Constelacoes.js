import React from 'react';
import MenuNav from '../components/MenuNav';
import Banner from '../components/Horoscopo/Banner';
import TextConstelacao from '../components/Constelacoes/TextConstelacao';

const Horoscopo = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <MenuNav />
        <div className='relative'>
          <Banner />
          <TextConstelacao />
        </div>
      </div>
    </div>
  );
}

export default Horoscopo;
