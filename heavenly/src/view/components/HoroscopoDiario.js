import React from 'react';
import { useNavigate } from 'react-router-dom';


const signos = [
  { nome: 'aries', imagem: 'https://img.icons8.com/office/64/aries.png', descricao: 'Otimista, Líder, Impaciente, Orgulhoso', gradiente: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' },
  { nome: 'taurus', imagem: 'https://img.icons8.com/office/64/taurus.png', descricao: 'Determinado, Paciente, Teimoso, Desconfiado', gradiente: 'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500' },
  { nome: 'gemini', imagem: 'https://img.icons8.com/office/64/gemini.png', descricao: 'Charmoso, Inteligente, Inquieto, Desorganizado', gradiente: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500' },
  { nome: 'cancer', imagem: 'https://img.icons8.com/office/64/cancer--v1.png', descricao: 'Sentimental, Romântico, Temperamental, Rancoroso', gradiente: 'bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500' },
  { nome: 'virgo', imagem: 'https://img.icons8.com/office/64/virgo.png', descricao: 'Perfeccionista, Gentil, Obsessivo, Crítico', gradiente: 'bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500' },
  { nome: 'libra', imagem: 'https://img.icons8.com/office/64/libra.png', descricao: 'Conciliador, Simpático, Indeciso, Inconstante', gradiente: 'bg-gradient-to-r from-red-400 via-pink-500 to-purple-500' },
  { nome: 'scorpio', imagem: 'https://img.icons8.com/office/64/scorpio.png', descricao: 'Ambicioso, Esperto, Teimoso, Desconfiado', gradiente: 'bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500' },
  { nome: 'sagittarius', imagem: 'https://img.icons8.com/office/64/sagittarius.png', descricao: 'Leal, Sincero, Descuidado, Exagerado', gradiente: 'bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-500' },
  { nome: 'capricorn', imagem: 'https://img.icons8.com/office/64/capricorn.png', descricao: 'Honesto, Calmo, Rígido, Calculista', gradiente: 'bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-400' },
  { nome: 'aquarius', imagem: 'https://img.icons8.com/office/64/aquarius.png', descricao: 'Criativo, Racional, Nervoso, Radical', gradiente: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500' },
  { nome: 'pisces', imagem: 'https://img.icons8.com/office/64/pisces.png', descricao: 'Bondoso, Compassivo, Dependente, Submisso', gradiente: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' },
  { nome: 'leo', imagem: 'https://img.icons8.com/office/64/leo.png', descricao: 'Sedutor, Carismático, Exagerado, Dramático', gradiente: 'bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500' }
];

const HoroscopoDiario = () => {
  const navigate = useNavigate();

  const handleSignoClick = (signo) => {
    navigate(`/horoscopo/${signo}`);
  };

  return (
    <div className='container mx-auto px-4 pt-10 bg-white'>
      <h2 className='mb-6 text-verde2 text-center text-3xl font-bold mb-4'>HORÓSCOPO DO DIA</h2>
      <p className='mb-8 text-verde2 text-center mb-6 text-sm'>
        Descubra o que os astros reservam para você hoje. Consulte as previsões diárias para entender as influências e energias que podem impactar seu dia. Deixe as estrelas guiarem suas decisões e aproveitar ao máximo cada momento.
      </p>

      <div className='grid grid-cols-2 gap-8 mt-16 md:grid-cols-4 lg:grid-cols-6 '>
        {signos.map((signo) => (
          <div key={signo.nome} className='flex flex-col items-center cursor-pointer' onClick={() => handleSignoClick(signo.nome)}>
            <div className={`w-12 h-12 rounded-full ${signo.gradiente} flex items-center justify-center`}>
              <img src={signo.imagem} alt={signo.nome} className='w-16 h-16'/>
            </div>
            <p className='text-sm text-verde2 text-center mt-2 sm:text md:text-xl lg:text-2xl'>{signo.descricao}</p>
            <h3 className='mt-2 text-verde2 font-bold mb-4 text-2xl'>{signo.nome.toUpperCase()}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoroscopoDiario;
