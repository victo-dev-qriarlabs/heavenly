import React from 'react';
import { TextConstelacoes } from '../../../utils/TextConstelacoes';
import { useParams } from 'react-router-dom';
const TextConstelacao= () => {
  const { signo } = useParams();
  const constelacao = TextConstelacoes.find(item => item.nome.toLowerCase() === signo.toLowerCase());

  if (!constelacao) {
    return <p>Signo não encontrado.</p>; // Mensagem caso o signo não seja encontrado
  }

  return (
    <div className='overflow-hidden mt-40'>
      <div className=' shadow-lg md:w-3/4 mx-auto my-2 w-11/12'>
        <h1 className='text-2xl font-extrabold mb-5 text-white text-center mt-7 text-bold xl:text-4xl'>
          {constelacao.nome.charAt(0).toUpperCase() + constelacao.nome.slice(1)}
        </h1>
        <p className='text-justify mb-6 text-xs text-white xl:text-2xl xl:p-10'>
          <strong>Período:</strong> {constelacao.data}
        </p>
      </div>
      <div className='bg-verde2 p-6 shadow-lg md:w-3/4 mx-auto my-2 w-11/12'>
        <h2 className='text-xl font-extrabold mb-5 text-white text-center mt-7 text-bold xl:text-4xl'>
          História e Mitologia
        </h2>
        <p className='text-justify mb-6 text-xs text-white xl:text-2xl xl:p-10'>
          {constelacao.historia_mitologia}
        </p>
      </div>
      <div className='bg-verde2 p-6 shadow-lg md:w-3/4 mx-auto my-2 w-11/12'>
        <h2 className='text-xl font-extrabold mb-5 text-white text-center mt-7 text-bold xl:text-4xl'>
          Constelação
        </h2>
        <p className='text-justify mb-6 text-xs text-white xl:text-2xl xl:p-10'>
          {constelacao.zodiaco}
        </p>
      </div>
      <div className='bg-verde2 p-6 shadow-lg md:w-3/4 mx-auto my-2 w-11/12'>
        <h2 className='text-xl font-extrabold mb-5 text-white text-center mt-7 text-bold xl:text-4xl'>
          Influência
        </h2>
        <p className='text-justify mb-6 text-xs text-white xl:text-2xl xl:p-10'>
          {constelacao.influencia}
        </p>
      </div>
    </div>
  );
}

export default TextConstelacao;
