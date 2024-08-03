import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import MenuNav from '../components/MenuNav';
import TextoHoroscopo from '../components/Horoscopo/TextoHoroscopo';
import Footer from '../components/Footer';
import ConstelacaoSigno from '../components/ConstelacaoSigno';
import DuvidasComuns from '../components/DuvidasComuns';
import { fetchHoroscope } from '../../services/rapidapi'; 

const HoroscopoSigno = () => {
  const { signo } = useParams();
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [error, setError] = useState(null);
  const hasFetchedData = useRef(false); 
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const getHoroscopeData = async () => {
      try {
        const { data, error } = await fetchHoroscope(signo);
        if (error) {
          setError(error);
        } else {
          setHoroscopeData(data);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    if (signo && !hasFetchedData.current) { 
      getHoroscopeData();
      hasFetchedData.current = true; 
    }
  }, [signo]);

  return (
    <>
    <div>
      <h1>Horóscopo</h1>
      {error && <p>Error: {error}</p>}
      {horoscopeData ? (
        <TextoHoroscopo titulo={horoscopeData[0]} data={horoscopeData[1]} texto={horoscopeData[2]} />
      ) : (
        <p>Carregando...</p>
      )}
    </div>

      <MenuNav />
      
      <div className=''>
     
        
        <ConstelacaoSigno />
        <DuvidasComuns />
      </div>
      <Footer />
    </>
  );
}

export default HoroscopoSigno;
