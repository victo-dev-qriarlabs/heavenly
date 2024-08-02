import React from 'react';

const TextoHoroscopo = ({ titulo,data,texto }) => {
  const hasData = titulo && data && texto;
  return (
    <div className='mt-12'>
      <div className='bg-verde2 p-6 rounded-lg shadow-lg w-full md:w-3/4 mx-auto mt-72 w-11/12'>
        {hasData ? (
          <>
            <h1 className='text-3xl font-bold mb-4 text-white mt-4 xl:text-4xl'>{titulo}</h1>
            <p className='text-white mb-6 text-sm xl:text-2xl xl:p-1'>{data}</p>
            <hr className="my-4 border-t-2 border-gray-300" />
            <p className='mt-4 text-justify text-white mb-6 text-sm xl:text-2xl xl:p-16'>{texto}</p>
          </>
        ) : (
          <p className='text-white mb-6 text-sm'>Estamos enfrentando problemas internos. Tente novamente mais tarde.</p>
        )}
      </div>
    </div>
  );
}

export default TextoHoroscopo;
