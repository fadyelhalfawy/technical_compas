import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TShape from './pages/TShape';
import Home from './pages/Home';
import Competencies from './pages/Competencies';

function App() {
  return (
    <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path='/competencies' element={<Competencies />} />
          <Route path={'/tshape'} element={<TShape />} />
        </Routes>
    </Router>
  );
}

export default App;
