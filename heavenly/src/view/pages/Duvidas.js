import React from 'react';
import MenuNav from '../components/MenuNav';
import Banner from '../components/Horoscopo/Banner';
import TextDuvidas from '../components/Duvidas/TextDuvidas';
import ConstalacaoSigno from '../components/home/ConstalacaoSigno';
import Footer from '../components/Footer';
import HoroscopoDiario from '../components/home/HoroscopoDiario';

const Horoscopo = () => {
  return (
    <div>
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

export default Horoscopo;
