import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';

const DuvidasComuns = () => {
  return (
    <>
    <div className='w-full px-4 p-6 bg-white'>
      <h2 className='text-3xl mb-4 text-verde2 mt-6 text-center font-bold '>DÚVIDAS COMUNS</h2>
      <p className='text-verde2 mb-6 text-sm'>
         Tem perguntas sobre horóscopos? Descubra as respostas para as dúvidas mais comuns sobre signos, previsões astrológicas e muito mais. Entenda melhor como o horóscopo pode influenciar sua vida e seu futuro.
     </p>

  <div className='flex justify-end mb-10'>
    <button className='flex items-center text-blue-500 font-bold'>
      <span className='text-verde2'>Saiba Mais</span>
      <FontAwesomeIcon icon={faChevronRight} className='ml-2 text-verde2' />
    </button>
  </div>
</div>  
    </>
  )
}

export default DuvidasComuns