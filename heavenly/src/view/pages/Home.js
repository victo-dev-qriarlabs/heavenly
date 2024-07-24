import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import MenuNav from '../components/MenuNav';

import Introducao from '../components/home/Introducao';

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <MenuNav />
      <Introducao />
      
      <div className='container mx-auto px-4 mt-12 bg-gray-200 p-6 -mt-7'>
        <h2 className='text-3xl font-extrabold mb-5 text-gray-800 text-center mt-16'>O que é Horoscopo?</h2>
        <p className='text-sm mb-8 text-gray-700 leading-relaxed text-center'>
          O horóscopo é uma ferramenta antiga que nos conecta com o universo, revelando como os corpos celestes influenciam nossas vidas. Descubra o que o cosmos reserva para você hoje. Cada signo do zodíaco possui características únicas e os astros oferecem orientações valiosas para ajudar a navegar nos diferentes aspectos da vida, desde o amor e carreira até a saúde e bem-estar.
        </p>
        <img src='./img/Horoscopo.jpg' alt='Introdução ao Horóscopo' className='w-full h-auto mb-8 rounded-lg shadow-md'/>
      </div>
      
      <div className='container mx-auto px-4 mt-12 mb-16'>
        <h2 className='text-4xl font-extrabold mb-6 text-gray-800 text-center'>HOROSCOPO DO DIA</h2>
        <p className='text-sm mb-8 text-gray-700 leading-relaxed text-center'>
          Descubra o que os astros reservam para você hoje. Consulte as previsões diárias para entender as influências e energias que podem impactar seu dia. Deixe as estrelas guiarem suas decisões e aproveitar ao máximo cada momento.
        </p>
        
        <h2 className='text-center text-2xl font-bold'>SIGNOS</h2>
        <div className='grid grid-cols-2 gap-8 mt-16'>
          
          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center'>
              <img src="https://img.icons8.com/office/64/aries.png" alt="aries" className='w-16 h-16'/>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-800'>ARIES</h3>
            <p className='text-sm text-center text-gray-600'>Otimista, Líder, Impaciente, Orgulhoso</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 flex items-center justify-center'>
              <img src="https://img.icons8.com/office/64/taurus.png" alt="taurus" className='w-16 h-16'/>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-800'>TOURO</h3>
            <p className='text-sm text-center text-gray-600'>Determinado, Paciente, Teimoso, Desconfiado</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center'>
              <img src="https://img.icons8.com/office/64/gemini.png" alt="gemini" className='w-16 h-16'/>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-800'>GEMEOS</h3>
            <p className='text-sm text-center text-gray-600'>Charmoso, Inteligente, Inquieto, Desorganizado</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 flex items-center justify-center'>
              <img src="https://img.icons8.com/office/64/cancer--v1.png" alt="cancer" className='w-16 h-16'/>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-800'>CANCER</h3>
            <p className='text-sm text-center text-gray-600'>Sentimental, Romântico, Temperamental, Rancoroso</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center'>
              <img src="https://img.icons8.com/office/64/virgo.png" alt="virgo" className='w-16 h-16'/>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-800'>VIRGEM</h3>
            <p className='text-sm text-center text-gray-600'>Perfeccionista, Gentil, Obsessivo, Crítico</p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 flex items-center justify-center'>
              <img src="https://img.icons8.com/office/64/libra.png" alt="libra" className='w-16 h-16'/>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-800'>LIBRA</h3>
            <p className='text-sm text-center text-gray-600'>Conciliador, Simpático, Indeciso, Inconstante</p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 flex items-center justify-center'>
              <img src="https://img.icons8.com/office/64/scorpio.png" alt="scorpio" className='w-16 h-16'/>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-800'>ESCORPIAO</h3>
            <p className='text-sm text-center text-gray-600'>Ambicioso, Esperto, Teimoso, Desconfiado</p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-500 flex items-center justify-center'>
              <img src="https://img.icons8.com/office/64/sagittarius.png" alt="sagittarius" className='w-16 h-16'/>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-800'>Sagitário</h3>
            <p className='text-sm text-center text-gray-600'>Leal, Sincero, Descuidado, Exagerado</p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-400 flex items-center justify-center'>
              <img src="https://img.icons8.com/office/64/capricorn.png" alt="capricorn" className='w-16 h-16'/>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-800'>CAPRICORNIO</h3>
            <p className='text-sm text-center text-gray-600'> Honesto, Calmo, Rígido, Calculista</p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center'>
              <img src="https://img.icons8.com/office/64/aquarius.png" alt="aquarius" className='w-16 h-16'/>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-800'>AQUARIO</h3>
            <p className='text-sm text-center text-gray-600'>Criativo, Racional, Nervoso, Radical</p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center'>
              <img src="https://img.icons8.com/office/64/pisces.png" alt="pisces" className='w-16 h-16'/>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-800'>PEIXES</h3>
            <p className='text-sm text-center text-gray-600'>Bondoso, Compassivo, Dependente, Submisso</p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 flex items-center justify-center'>
              <img src="https://img.icons8.com/office/64/leo.png" alt="leo" className='w-16 h-16'/>
            </div>
            <h3 className='mt-2 text-lg font-bold text-gray-800'>LEÃO</h3>
            <p className='text-sm text-center text-gray-600'>Sedutor, Carismático, Exagerado, Dramático</p>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: "url('./img/banner.png')" }}
        className='w-full h-[360px] bg-cover bg-center flex items-center justify-center relative'
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className=' p-8 rounded-lg z-10'>
          <h1 className='text-xl font-bold mb-4 text-center text-yellow-400'>CONSTELAÇÃO DE CADA SIGNO</h1>
          <p className='items-center text-md text text-white'>
            Curioso sobre as estrelas que formam seu signo? Mergulhe no universo e descubra as constelações que representam o seu signo do zodíaco. Cada constelação tem uma história única e um significado especial.
          </p>
          <div className="text-right">
            <button className='mt-4 bg-transparent text-white border border-white font-bold py-2 px-12 rounded'>Ver Mais</button>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 p-6'>
      <h2 className='text-3xl font-extrabold mb-4 text-gray-900 mt-6 text-center'>DÚVIDAS COMUNS</h2>
      <p className='text-sm text-gray-700 leading-relaxed p-4'>
         Tem perguntas sobre horóscopos? Descubra as respostas para as dúvidas mais comuns sobre signos, previsões astrológicas e muito mais. Entenda melhor como o horóscopo pode influenciar sua vida e seu futuro.
     </p>

  <div className='flex justify-end mb-10'>
    <button className='flex items-center text-blue-500 font-bold'>
      <span>Saiba Mais</span>
      <FontAwesomeIcon icon={faChevronRight} className='ml-2' />
    </button>
  </div>
</div>  

<div className='bg-gray-300'>
  <div className='container mx-auto px-7'>
  <div className='flex flex-col space-y-4 mt-7'>
  <button className='bg-gray-800 text-white font-bold py-2 px-32 mt-10'>
    Ajuda
  </button>
  
  <button className='bg-gray-800 text-white font-bold py-2 px-6'>
    Entre em contato
  </button>
</div>
  </div>

  <div className='space-y-2'>
    <p className='text-gray-600 flex justify-center mt-4'>Autores</p>
    <p className='text-gray-600 flex justify-center mt-4'>Todos os produtos</p>
    <p className='text-gray-600 flex justify-center mt-4'>Termos de uso</p>
  </div>

  <div className='text-center mt-6'>
          <h3 className='text-2xl font-semibold text-gray-800 mb-4'>Redes Sociais</h3>
          <div className='flex space-x-4 justify-center'>
            <img className='w-12 h-12' src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook"/>
            <img className='w-12 h-12' src="https://img.icons8.com/color/48/twitter--v1.png" alt="twitter"/>
            <img className='w-12 h-12' src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram"/>
          </div>
          <h3 className='text-2xl font-semibold text-gray-800 mb-4 mt-10'>Apoio</h3>
          <div className='flex justify-center'>
            <img src='./img/qriar_logo.png' alt='logo qriarlans' className='w-[200px] mb-10' />
         </div>

          
        </div>
</div>

    </div>
  );
};

export default Home;
