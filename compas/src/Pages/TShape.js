import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const TShape = () => {
    const location = useLocation();
    const { selectedTable, selectedTitle } = location.state || {};
    const [expValue, setData] = useState([]);
    const [notesValue, setNotes] = useState([]);

    const keyTable = selectedTable.includes(" ") || selectedTable.includes("-") ? selectedTable.replaceAll(" ", "_").replaceAll("-", "_").toLowerCase() : selectedTable.toLowerCase();
    console.log(selectedTable, selectedTitle, keyTable);
    
    useEffect(() => {
        fetch(`http://localhost:5000/tshape?table=${keyTable}&title=${selectedTitle}`)
        .then(response => response.json())
        .then(data => {
           setData(data.expValue[0]);
           setNotes(data.notesValue[0]);
        })
        .catch(error => console.error('Error fetching data:', error));
      }, [keyTable, selectedTitle])

      const expValueEntries = Object.entries(expValue).slice(1); 
      const notesValueEntries = Object.values(notesValue).slice(1);
      console.log(expValueEntries);
      console.log(notesValueEntries);
      
      
    
    return(
        <>
        <Navbar />
        
        <main>
            <div className="overflow-x-auto p-14">
            <h1 className='text-center text-4xl font-semibold mb-6'>T-Shape Skills</h1>
            <h2 className="text-2xl font-bold mb-4 text-gray-600">{selectedTable} - {selectedTitle}</h2>
        <table className="min-w-full border-collapse border border-gray-200">
  <thead>
    <tr className="bg-gray-100">
      <th className="px-4 md:px-6 py-3 border border-gray-300 text-gray-700 font-semibold text-center text-sm md:text-base">Technology</th>
      <th className="px-4 md:px-6 py-3 border border-gray-300 text-gray-700 font-semibold text-center text-sm md:text-base">Experience Level</th>
      <th className="px-4 md:px-6 py-3 border border-gray-300 text-gray-700 font-semibold text-center text-sm md:text-base">Notes</th>
    </tr>
  </thead>
  <tbody>
  {expValueEntries.map(([row, expValue], index) => {
                const notes = notesValueEntries[index];
                return (
                  <tr className="odd:bg-white even:bg-gray-50" key={index}>
                    <td className="px-4 md:px-6 py-2 md:py-4 border border-gray-300 text-gray-700 text-center text-sm md:text-base">{row.replaceAll("_", " ")}</td>
                    <td className="px-4 md:px-6 py-2 md:py-4 border border-gray-300 text-gray-700 text-center text-sm md:text-base">{expValue ?? "N/A"}</td>
                    <td className="px-4 md:px-6 py-2 md:py-4 border border-gray-300 text-gray-700 text-center text-sm md:text-base">{notes ?? "N/A"}</td>
                  </tr>
                );
              })}
  </tbody>
</table>
        </div>
        </main>
        <Footer />
        </>
    )
}

export default TShape;