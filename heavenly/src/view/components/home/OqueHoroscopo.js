import React from 'react'

const OqueHoroscopo = () => {
  return (
    <>
      <div className='container mx-auto px-4 bg-verde2 p-6 -mt-7'>
        <h2 className='text-3xl font-extrabold mb-5 text-white text-center mt-16'>O que é Horoscopo?</h2>
        <p className='text-sm mb-8 text-gray-700 leading-relaxed text-center text-white'>
          O horóscopo é uma ferramenta antiga que nos conecta com o universo, revelando como os corpos celestes influenciam nossas vidas. Descubra o que o cosmos reserva para você hoje. Cada signo do zodíaco possui características únicas e os astros oferecem orientações valiosas para ajudar a navegar nos diferentes aspectos da vida, desde o amor e carreira até a saúde e bem-estar.
        </p>
        <img src='./img/Horoscopo.jpg' alt='Introdução ao Horóscopo' className='w-full h-auto mb-8 rounded-lg shadow-md'/>
      </div>
    </>
  )
}

export default OqueHoroscopo