import React from 'react';
import {duvidasComuns} from '../../../utils/duvidasComuns'

const TextDuvidas = () => {
  return (
    <div className='overflow-hidden mt-72'>
      {duvidasComuns.map((item) => (
        <div key={item.id} className='bg-verde2 p-6 shadow-lg md:w-3/4 mx-auto my-2 w-11/12'>
          <h1 className='text-2xl font-extrabold mb-5 text-white text-center mt-7 text-bold'>
            {item.duvida}
          </h1>
          <p className='text-justify mb-6 text-xs text-white'>
            {item.resposta}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TextDuvidas;
