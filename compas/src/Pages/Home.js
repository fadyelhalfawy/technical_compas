import DepartmentSelector from '../Reducer/DepartmentSelector';
import Footer from '../Reducer/Footer';
import Navbar from '../Reducer/NavBar';

const Home = () => {
    return (
        <div className='p-6'>
          <Navbar />
          <main>
            <DepartmentSelector />
          </main>
          <Footer />
        </div>
    );
  }
  
  export default Home;