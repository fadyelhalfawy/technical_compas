import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TShape from './Pages/TShape';
import Home from './Pages/Home';
import Competencies from './Pages/Competencies';

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
