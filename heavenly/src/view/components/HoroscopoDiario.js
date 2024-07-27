import React from 'react';

const HoroscopoDiario = () => {
  return (
    <div className='container mx-auto px-4 pt-10 bg-white'>
      <h2 className='mb-6 text-verde2 text-center text-3xl font-bold mb-4'>HORÓSCOPO DO DIA</h2>
      <p className='mb-8 text-verde2 text-center mb-6 text-sm'>
        Descubra o que os astros reservam para você hoje. Consulte as previsões diárias para entender as influências e energias que podem impactar seu dia. Deixe as estrelas guiarem suas decisões e aproveitar ao máximo cada momento.
      </p>

      <div className='grid grid-cols-2 gap-8 mt-16'>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center'>
            <img src="https://img.icons8.com/office/64/aries.png" alt="aries" className='w-16 h-16'/>
          </div>
          <p className='text-sm text-verde2 text-center mt-2'>Otimista, Líder, Impaciente, Orgulhoso</p>
          <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>ÁRIES</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 flex items-center justify-center'>
            <img src="https://img.icons8.com/office/64/taurus.png" alt="taurus" className='w-16 h-16'/>
          </div>
          <p className='text-sm text-verde2 text-center mt-2'>Determinado, Paciente, Teimoso, Desconfiado</p>
          <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>TOURO</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center'>
            <img src="https://img.icons8.com/office/64/gemini.png" alt="gemini" className='w-16 h-16'/>
          </div>
          <p className='text-sm text-verde2 text-center mt-2'>Charmoso, Inteligente, Inquieto, Desorganizado</p>
          <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>GÊMEOS</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 flex items-center justify-center'>
            <img src="https://img.icons8.com/office/64/cancer--v1.png" alt="cancer" className='w-16 h-16'/>
          </div>
          <p className='text-sm text-verde2 text-center mt-2'>Sentimental, Romântico, Temperamental, Rancoroso</p>
          <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>CÂNCER</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center'>
            <img src="https://img.icons8.com/office/64/virgo.png" alt="virgo" className='w-16 h-16'/>
          </div>
          <p className='text-sm text-verde2 text-center mt-2'>Perfeccionista, Gentil, Obsessivo, Crítico</p>
          <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>VIRGEM</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 flex items-center justify-center'>
            <img src="https://img.icons8.com/office/64/libra.png" alt="libra" className='w-16 h-16'/>
          </div>
          <p className='text-sm text-verde2 text-center mt-2'>Conciliador, Simpático, Indeciso, Inconstante</p>
          <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>LIBRA</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 flex items-center justify-center'>
            <img src="https://img.icons8.com/office/64/scorpio.png" alt="scorpio" className='w-16 h-16'/>
          </div>
          <p className='text-sm text-verde2 text-center mt-2'>Ambicioso, Esperto, Teimoso, Desconfiado</p>
          <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>ESCORPIÃO</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-500 flex items-center justify-center'>
            <img src="https://img.icons8.com/office/64/sagittarius.png" alt="sagittarius" className='w-16 h-16'/>
          </div>
          <p className='text-sm text-verde2 text-center mt-2'>Leal, Sincero, Descuidado, Exagerado</p>
          <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>SAGITÁRIO</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-400 flex items-center justify-center'>
            <img src="https://img.icons8.com/office/64/capricorn.png" alt="capricorn" className='w-16 h-16'/>
          </div>
          <p className='text-sm text-verde2 text-center mt-2'>Honesto, Calmo, Rígido, Calculista</p>
          <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>CAPRICÓRNIO</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center'>
            <img src="https://img.icons8.com/office/64/aquarius.png" alt="aquarius" className='w-16 h-16'/>
          </div>
          <p className='text-sm text-verde2 text-center mt-2'>Criativo, Racional, Nervoso, Radical</p>
          <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>AQUÁRIO</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center'>
            <img src="https://img.icons8.com/office/64/pisces.png" alt="pisces" className='w-16 h-16'/>
          </div>
          <p className='text-sm text-verde2 text-center mt-2'>Bondoso, Compassivo, Dependente, Submisso</p>
          <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>PEIXES</h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-24 h-24 rounded-full bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 flex items-center justify-center'>
            <img src="https://img.icons8.com/office/64/leo.png" alt="leo" className='w-16 h-16'/>
          </div>
          <p className='text-sm text-verde2 text-center mt-2'>Sedutor, Carismático, Exagerado, Dramático</p>
          <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>LEÃO</h3>
        </div>
      </div>
    </div>
  );
};

export default HoroscopoDiario;
