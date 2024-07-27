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
    <>
     <MenuNav />
      <Introducao />
      <OqueHoroscopo />
      <HoroscopoDiario />
      <ConstalacaoSigno />
      <DuvidasComuns />
    <Footer />
    </>
  );
};

export default Home;
