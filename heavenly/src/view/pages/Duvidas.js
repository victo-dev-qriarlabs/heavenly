import React from 'react';
import MenuNav from '../components/MenuNav';
import Banner from '../components/Horoscopo/Banner';
import TextDuvidas from '../components/Duvidas/TextDuvidas';
import ConstalacaoSigno from '../components/ConstalacaoSigno';
import Footer from '../components/Footer';
import HoroscopoDiario from '../components/HoroscopoDiario';

const Duvidas = () => {
  return (
    <div>
      <img src= "/img/banner.png" alt="Zodiaco" className='mx-auto img-class' />
       <div className='container mx-auto'>
           <MenuNav />
           <Banner />
           <TextDuvidas />
           <ConstalacaoSigno />
           <HoroscopoDiario />
           <Footer />
       </div>
    </div>
  );
}

export default Duvidas;
