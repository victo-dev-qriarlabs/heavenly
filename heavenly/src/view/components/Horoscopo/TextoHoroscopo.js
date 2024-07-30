import React from 'react';

const TextoHoroscopo = ({ signo }) => {
  return (
    <div className='mt-12'>
      <div className='bg-verde2 p-6 shadow-lg md:w-3/4 mx-auto mt-72 w-[400px]'>
        <h1 className='text-2xl font-extrabold mb-5 text-white text-center mt-7 text-bold'>Horóscopo diário de {signo}</h1>
        <p className='text-justify mb-6 text-xs text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse Acillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <hr className="my-4 border-t-2 border-gray-300 " />
        <img src="/img/ExemploImg.png" alt="exemplo" className="w-full h-auto" />
        <p className='mt-4 text-justify text-xs mb-8 text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className='mt-4 text-justify text-xs mb-8 text-gray-700  text-center text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default TextoHoroscopo;
