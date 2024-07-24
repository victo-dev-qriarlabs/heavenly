import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Horoscopo from './Horoscopo';
import Constelacoes from './Constelacoes';
import Duvidas from './Duvidas';


function App() {
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
export default App;
