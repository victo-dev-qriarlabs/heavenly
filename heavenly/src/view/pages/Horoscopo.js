import React from 'react';
import MenuNav from '../components/MenuNav';
import Footer from '../components/Footer';
import ConstalacaoSigno from '../components/ConstalacaoSigno';
import DuvidasComuns from '../components/DuvidasComuns';
import HoroscopoDiario from '../components/HoroscopoDiario';

const Horoscopo = () => {
  return (
    <>
    <img src= "/img/banner.png" alt="Zodiaco" className='mx-auto img-class' />
    <MenuNav />
       <div className='container mx-auto '>
        <div className='mt-20'></div>
           <HoroscopoDiario   />
           <ConstalacaoSigno />
           <DuvidasComuns />
       </div>
       <Footer />
    </>
  );
}

export default Horoscopo;
