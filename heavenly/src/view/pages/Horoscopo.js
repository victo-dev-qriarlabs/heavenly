import React from 'react';
import MenuNav from '../components/MenuNav';
import Banner from '../components/Horoscopo/Banner';
import TextoHoroscopo from '../components/Horoscopo/TextoHoroscopo';
import Footer from '../components/Footer';
import ConstalacaoSigno from '../components/home/ConstalacaoSigno';
import DuvidasComuns from '../components/home/DuvidasComuns';


const Horoscopo = () => {
  return (
    <>
    <MenuNav />
       <div className='container mx-auto '>
           <Banner />
           <TextoHoroscopo />
           <ConstalacaoSigno />
           <DuvidasComuns />
       </div>
       <Footer />
    </>
  );
}

export default Horoscopo;
