import React from 'react';
import MenuNav from '../components/MenuNav';
import OqueHoroscopo from '../components/home/OqueHoroscopo';
import Introducao from '../components/home/Introducao';
import HoroscopoDiario from '../components/HoroscopoDiario';
import ConstelacaoSigno from '../components/ConstelacaoSigno';
import DuvidasComuns from '../components/DuvidasComuns';
import Footer from '../components/Footer';
import AnimatedBackground from '../styles/AnimatedBackground';

const Home = () => {
  return (
    <>
    <AnimatedBackground />

     <MenuNav />
      <Introducao />
      <OqueHoroscopo />
      <HoroscopoDiario  />
      <ConstelacaoSigno />
      <DuvidasComuns />
    <Footer />
    </>
  );
};

export default Home;
