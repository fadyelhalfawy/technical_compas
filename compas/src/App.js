import './App.css';
import DepartmentSelector from './Reducer/DepartmentSelector';
import Footer from './Reducer/Footer';
import Navbar from './Reducer/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <DepartmentSelector />
      </main>
      <Footer />
    </div>
  );
}

export default App;
