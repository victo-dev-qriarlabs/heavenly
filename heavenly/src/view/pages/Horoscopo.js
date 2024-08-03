import { useEffect } from 'react';
import MenuNav from '../components/MenuNav';
import Footer from '../components/Footer';
import ConstelacaoSigno from '../components/ConstelacaoSigno';
import DuvidasComuns from '../components/DuvidasComuns';
import HoroscopoDiario from '../components/HoroscopoDiario';

const Horoscopo = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <MenuNav />
       <div className=''>
        <div className='mt-20'></div>
           <HoroscopoDiario   />
           <ConstelacaoSigno />
           <DuvidasComuns />
       </div>
       <Footer />
    </>
  );
}

export default Horoscopo;
