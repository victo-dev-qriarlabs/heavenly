import React from 'react';
import MenuNav from '../components/MenuNav';
import OqueHoroscopo from '../components/home/OqueHoroscopo';
import Introducao from '../components/home/Introducao';
import HoroscopoDiario from '../components/HoroscopoDiario';
import ConstalacaoSigno from '../components/ConstalacaoSigno';
import DuvidasComuns from '../components/DuvidasComuns';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      <img src= "/img/banner.png" alt="Zodiaco" className='mx-auto img-class' />
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
