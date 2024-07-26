import React from 'react';
import MenuNav from '../components/MenuNav';
import Banner from '../components/Horoscopo/Banner';
import TextConstelacao from '../components/Constelacoes/TextConstelacao';
import Footer from '../components/Footer';
import DuvidasComuns from '../components/home/DuvidasComuns';
import HoroscopoDiario from '../components/home/HoroscopoDiario';

const Horoscopo = () => {
  return (
    <div>
        <MenuNav />
      <div className='container mx-auto'>
          <Banner />
          <TextConstelacao />
          <DuvidasComuns />
          <HoroscopoDiario />
      </div>
      <Footer/>
    </div>
  );
}

export default Horoscopo;
