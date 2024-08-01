import { useEffect } from 'react';
import MenuNav from '../components/MenuNav';
import Banner from '../components/Horoscopo/Banner';
import TextDuvidas from '../components/Duvidas/TextDuvidas';
import ConstelacaoSigno from '../components/ConstelacaoSigno';
import Footer from '../components/Footer';
import HoroscopoDiario from '../components/HoroscopoDiario';

const Duvidas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <img src= "/img/banner.png" alt="Zodiaco" className='mx-auto img-class' />
       <div className='container mx-auto'>
           <MenuNav />
           <Banner />
           <TextDuvidas />
           <ConstelacaoSigno />
           <HoroscopoDiario />
           <Footer />
       </div>
    </div>
  );
}

export default Duvidas;
