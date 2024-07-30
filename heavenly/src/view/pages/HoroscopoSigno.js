import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuNav from '../components/MenuNav';
import Banner from '../components/Horoscopo/Banner';
import TextoHoroscopo from '../components/Horoscopo/TextoHoroscopo';
import Footer from '../components/Footer';
import ConstelacaoSigno from '../components/ConstelacaoSigno';
import DuvidasComuns from '../components/DuvidasComuns';
import Teste from './Teste';

const HoroscopoSigno = () => {
  const { signo } = useParams();
  const [textoHoroscopo, setTextoHoroscopo] = useState('');

  return (
    <>
    <img src= "/img/banner.png" alt="Zodiaco" className='mx-auto img-class' />
      <MenuNav />
      <div className='container mx-auto'>
        <Banner />
        <TextoHoroscopo signo={signo}  />
        <ConstelacaoSigno />
        <DuvidasComuns />
        {/* <Teste selectedSign={signo} setTextoHoroscopo={setTextoHoroscopo} /> */}
      </div>
      <Footer />
    </>
  );
}

export default HoroscopoSigno;
