import React from 'react';
import MenuNav from '../components/MenuNav';
import Banner from '../components/Horoscopo/Banner';
import TextDuvidas from '../components/Duvidas/TextDuvidas';

const Horoscopo = () => {
  return (
    <div>
       <div className='container mx-auto'>
           <MenuNav />
       <div className='relative'>
           <Banner />
           <TextDuvidas />
       </div>
    </div>
    </div>
  );
}

export default Horoscopo;
