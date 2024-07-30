import React from 'react'


const ConstelacaoSigno = () => {
  return (
    <>
    <div
        
        className='w-full h-[360px] bg-cover bg-center flex items-center justify-center relative'
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className=' p-8 rounded-lg z-10'>
          <h1 className='font-bold mb-4 text-center text-white mt-2 text-3xl'>CONSTELAÇÃO DE CADA SIGNO</h1>
          <p className='text-white mb-6 text-sm'>
            Curioso sobre as estrelas que formam seu signo? Mergulhe no universo e descubra as constelações que representam o seu signo do zodíaco. Cada constelação tem uma história única e um significado especial.
          </p>
          <div className="text-right">
            <button className='mt-4 bg-transparent text-white border border-white font-bold py-2 px-12 rounded'>Ver Mais</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConstelacaoSigno