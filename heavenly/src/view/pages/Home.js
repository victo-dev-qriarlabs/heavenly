import React from 'react';
import MenuNav from '../components/MenuNav';
import OqueHoroscopo from '../components/home/OqueHoroscopo';
import Introducao from '../components/home/Introducao';
import HoroscopoDiario from '../components/home/HoroscopoDiario';
import ConstalacaoSigno from '../components/home/ConstalacaoSigno';
import DuvidasComuns from '../components/home/DuvidasComuns';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className='bg-gray-100'>
      <MenuNav />
      <Introducao />
      <OqueHoroscopo />
      <HoroscopoDiario />
      <ConstalacaoSigno />
      <DuvidasComuns />
      <Footer />
    </div>
  );
};

export default Home;
