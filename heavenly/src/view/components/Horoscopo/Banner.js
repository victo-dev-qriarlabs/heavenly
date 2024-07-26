import React from 'react';
import zodiaco from '../../assets/zodiaco.png'; 

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: "url('/img/banner.png')" }}
      className='absolute top-0 bg-cover bg-center flex items-center justify-center -z-10'
    >
      <img src={zodiaco} alt="Zodiaco" className='rounded-full ' />
    </div>

  );
}

export default Banner;
