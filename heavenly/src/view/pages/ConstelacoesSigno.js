import React, { useEffect } from 'react';
import MenuNav from '../components/MenuNav';
import Footer from '../components/Footer';
import Banner from '../components/Horoscopo/Banner';
import TextConstelacao from '../components/Constelacoes/TextConstelacao';
import DuvidasComuns from '../components/DuvidasComuns';
import HoroscopoDiario from '../components/HoroscopoDiario';

const ConstelacoesSigno = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
   
        <MenuNav />
      <div className=''>
     
          <TextConstelacao />
          <DuvidasComuns />
          <HoroscopoDiario />
      </div>
      <Footer/>
    </>
  );
}

export default ConstelacoesSigno;