import React from 'react';
import MenuNav from '../components/MenuNav';
import Banner from '../components/Horoscopo/Banner';
import TextoHoroscopo from '../components/Horoscopo/TextoHoroscopo';
import Footer from '../components/Footer';

const Horoscopo = () => {
  return (
    <div>
       <div className='container mx-auto'>
           <MenuNav />
       <div className='relative'>
           <Banner />
           <TextoHoroscopo />
       </div>
    </div>
    </div>
  );
}

export default Horoscopo;
