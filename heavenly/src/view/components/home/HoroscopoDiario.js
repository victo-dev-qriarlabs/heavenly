import React from 'react'

const HoroscopoDiario = () => {
  return (
    <>
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
    </>
  )
}

export default HoroscopoDiario