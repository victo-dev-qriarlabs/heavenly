
  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  import Home from '../view/pages/Home';
  import Horoscopo from '../view/pages/Horoscopo';
  import HoroscopoSigno from '../view/pages/HoroscopoSigno';
  import Constelacoes from '../view/pages/Constelacoes';
  import Duvidas from '../view/pages/Duvidas';
  import Teste from '../view/pages/Teste'; 


  function Rotas() {
    return (
      <Router>
        <nav>
          <ul>
            <Link to="/"></Link>
            <Link to="/Horoscopo"></Link>
            <Link to="/Constelacoes"></Link>
            <Link to="/Duvidas"></Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Horoscopo" element={<Horoscopo/>} />
          <Route path="/Horoscopo/:signo" element={<HoroscopoSigno/>} />
          <Route path="/Constelacoes" element={<Constelacoes/>} />
          <Route path="/Duvidas" element={<Duvidas/>} />
          <Route path="/Teste" element={<Teste/>} />  
        </Routes>
      </Router>
    );
  }
  export default Rotas;
