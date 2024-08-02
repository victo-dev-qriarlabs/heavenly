import { useEffect } from 'react';
import MenuNav from '../components/MenuNav';
import Footer from '../components/Footer';
import DuvidasComuns from '../components/DuvidasComuns';
import HoroscopoDiario from '../components/HoroscopoDiario';

const Constelacoes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <img src= "/img/banner.png" alt="Zodiaco" className='mx-auto img-class' />
    <MenuNav />
       <div className='container mx-auto '>
        <div className='mt-20'></div>
        <HoroscopoDiario titulo="CONSTELAÇÃO DE CADA SIGNO" descricao="Curioso sobre as estrelas que formam seu signo? Mergulhe no universo e descubra as constelações que representam o seu signo do zodíaco. Cada constelação tem uma história única e um significado especial." baseRoute = {'constelacao'} />
        <DuvidasComuns />
       </div>
       <Footer />
    </div>
  );
}

export default Constelacoes;
