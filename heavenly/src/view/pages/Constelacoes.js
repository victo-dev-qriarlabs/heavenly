import React from 'react'

const Constelacoes = () => {
  return (
    <div className='container mx-auto'>
    <div>
    <div className='h-16 flex items-center justify-center bg-slate-100'>
      <div className='flex-grow text-left px-4'>
        <div className='font-black text-2xl text-gray-800'>
          HEAVENLY
        </div>
      </div>
    </div>
    <div className='relative'>
      <div
        style={{ backgroundImage: "url('/img/Banner.png')" }} 
        className='w-full h-[500px] bg-cover bg-center flex items-center justify-center'
      >
      </div>
      <div className='absolute top-72 left-0 right-0 flex flex-col justify-center items-center p-10 z-20'>
        <div className='bg-gray-200 -m-6 p-6 rounded-lg shadow-lg'>
          <h1 className='font-black text-2xl mt-4'>Constelacao de áquario</h1>
          <p className='mt-4 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr className="my-4 border-t-2 border-gray-300" />
          <img src="/img/Img1.png" alt="exemplo" className="w-full h-auto" />
          <h1 className='font-black text-2xl mt-4'>Historia</h1>
          <p className='mt-4 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className='mt-4 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h1 className='font-black text-2xl mt-4'>Desenho que a Constelacao forma</h1>
          <img src="/img/Img2.png" alt="exemplo" className="w-full h-auto" />
          <p className='mt-4 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className='mt-4 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      
    </div>
    </div>
  </div>
  )
}

export default Constelacoes