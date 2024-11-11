import { useLocation } from 'react-router-dom';
import jsonData from '../data/Competencies.json';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Competencies = () => {
    const location = useLocation();
    const { competencie, level } = location.state || {};
    
    const getCompetencie = jsonData.competencies;
    const selectedCompetencie = getCompetencie.find(comp => comp.name === competencie.toLowerCase());

    const getLevel = selectedCompetencie ? selectedCompetencie.levels : [];
    const selectedLevel = getLevel.find(lev => lev.level === level);
    
    return (
        <>
        <Navbar />
        <main>
            <div className="max-w-full overflow-x-auto p-14">
                <h1 className='text-center text-4xl font-semibold mb-4'>Competencies</h1>
                <h2 className="text-2xl font-bold mb-4">{selectedLevel.competency} - {level}</h2>
                <table className="min-w-full border-collapse border border-gray-300 text-left">
                    <thead>
                        <tr>
                        <th className="border border-gray-300 px-7 py-2 font-semibold text-md text-center">Competency</th>
                        <th className="border border-gray-300 px-7 py-2 font-semibold text-md text-center">Levels</th>
                        <th className="border border-gray-300 px-4 py-2 font-semibold text-md text-center">Definition</th>
                        <th className="border border-gray-300 px-4 py-2 font-semibold text-md text-center">Overview</th>
                        <th className="border border-gray-300 px-4 py-2 font-semibold text-md text-center">Behavioral Indicators</th>
                        </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border border-gray-300 p-1">{selectedLevel.competency}</td>
                <td className="border border-gray-300 px-4 py-2">{level}</td>
                <td className="border border-gray-300 px-4 py-2">{selectedLevel.definition}</td>
                <td className="border border-gray-300 px-4 py-2">{selectedLevel.overview}</td>
                <td className="border border-gray-300 px-4 py-2">
                    <ul className='list-disc list-inside space-y-3'>
                        {selectedLevel.behavioral.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
          ))}
        </ul>

                </td>
                </tr>
                
            </tbody>
            </table>
        </div>
        </main>
        <Footer />
        </>
        
    );
  }
  
  export default Competencies;