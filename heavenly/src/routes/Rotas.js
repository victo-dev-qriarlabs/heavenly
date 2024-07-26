import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../view/pages/Home';
import Horoscopo from '../view/pages/Horoscopo';
import Constelacoes from '../view/pages/Constelacoes';
import Duvidas from '../view/pages/Duvidas';


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
        <Route path="/Constelacoes" element={<Constelacoes/>} />
        <Route path="/Duvidas" element={<Duvidas/>} />
      </Routes>
    </Router>
  );
}
export default Rotas;
