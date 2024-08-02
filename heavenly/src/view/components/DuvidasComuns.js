import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const DuvidasComuns = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/duvidas');
  };
  return (
    <>
    <div className='w-full px-4 p-6 bg-white md:h-80 xl:h-[400px]'>
      <h2 className='text-3xl mb-4 text-verde2 mt-6 text-center font-bold md:text-4xl xl:text-4xl'>DÚVIDAS COMUNS</h2>
      <p className='text-verde2 mb-6 text-sm md:text-lg md:text-center md:p-8 xl:text-2xl xl:p-16'>
         Tem perguntas sobre horóscopos? Descubra as respostas para as dúvidas mais comuns sobre signos, previsões astrológicas e muito mais. Entenda melhor como o horóscopo pode influenciar sua vida e seu futuro.
     </p>

  <div className='flex justify-end mb-10'>
    <button onClick={handleClick} className='flex items-center font-bold'>
      <span className='text-verde2 md:text-2xl xl:text-3xl'>Saiba Mais</span>
      <FontAwesomeIcon icon={faChevronRight} className='ml-2 text-verde2' />
    </button>
  </div>
</div>  
    </>
  )
}

export default DuvidasComuns