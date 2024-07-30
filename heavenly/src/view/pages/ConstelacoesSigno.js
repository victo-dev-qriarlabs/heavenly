import React from 'react';
import MenuNav from '../components/MenuNav';
import Footer from '../components/Footer';
import ConstelacaoSigno from '../components/ConstelacaoSigno';
import DuvidasComuns from '../components/DuvidasComuns';
import HoroscopoDiario from '../components/HoroscopoDiario';

const ConstelacoesSigno = () => {
  return (
    <>
    <img src= "/img/banner.png" alt="Zodiaco" className='mx-auto img-class' />
    <MenuNav />
       <div className='container mx-auto '>
        <div className='mt-20'></div>
        <HoroscopoDiario titulo="CONSTELAÇÃO DE CADA SIGNO" descricao="Curioso sobre as estrelas que formam seu signo? Mergulhe no universo e descubra as constelações que representam o seu signo do zodíaco. Cada constelação tem uma história única e um significado especial."
/>
        <ConstelacaoSigno />
        <DuvidasComuns />
       </div>
       <Footer />
    </>
  );
}

export default ConstelacoesSigno;