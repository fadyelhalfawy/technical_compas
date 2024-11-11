import DepartmentSelector from '../components/departmentSelector';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

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