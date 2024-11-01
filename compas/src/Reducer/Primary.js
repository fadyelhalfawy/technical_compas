import React from 'react';
import { Link } from 'react-router-dom';
import Departement from './Departement';
import Practice from './Practice';
import Title from './Title';
import { useNavigate  } from 'react-router-dom';

const Primary = ({ 
    Departments, selectedPrimaryDepartment, primaryDepartment, primaryPractice,
     primaryPractices, selectedPrimaryPractice, primaryTitle, primaryTitles,
      selectedPrimaryTitle, handleDepartment, handlePractice, handleTitle, handleCompetencies }) => {

    const navigate = useNavigate();

    const handleTshape = (e) => {
    e.preventDefault();

    navigate('/tshape', {
        state: { selectedTable: primaryPractice, selectedTitle: primaryTitle },
      });
  }

  return (
    <div className="space-y-4">
        <Departement 
            department={primaryDepartment}
            handleDepartment={handleDepartment}
            Departments={Departments}
        />

        {selectedPrimaryDepartment && (
            <div className='border border-2 p-3'>
                <Practice 
                    practice={primaryPractice}
                    handlePractice={handlePractice}
                    practices={primaryPractices}
                />
            </div>
          
      )}

      {selectedPrimaryPractice && (
        <div className='border border-2 p-3'>
            <Title 
                titles={primaryTitles}
                title={primaryTitle}
                handleTitle={handleTitle}
            />
        </div>
        
      )}

    {selectedPrimaryTitle && (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="border border-gray-300 rounded-lg p-2 w-full my-4">
    <div className='pl-2'>
        <strong>Job Title:</strong>
        <p className='my-4 text-gray-500'>{ selectedPrimaryTitle.title }</p>
    </div>

    <div className='pl-2'>
    <strong>Function:</strong>
    <p className='my-4 text-gray-500'>{selectedPrimaryTitle.description.function}</p>
    </div>

    <div className='pl-2'>
        <strong>Sub function:</strong>
        <p className='my-4 text-gray-500'>{selectedPrimaryTitle.description.subFunction}</p>
    </div>

    <div className='pl-2'>
        <strong >Reports to:</strong>
        <p className='my-4 text-gray-500'>{selectedPrimaryTitle.description.reportsTo}</p>
    </div>

    <div className='pl-2'>
        <strong>Job purpose:</strong>
        <p className='my-4 text-gray-500'>{selectedPrimaryTitle.description.jobPurpose}</p>
    </div>

    <div className='pl-2'>
        <strong>Key Accountabilities and decision ownership:</strong>
        <ul className='list-disc list-inside space-y-2 text-gray-500 my-4 pl-2'>
            {selectedPrimaryTitle.description.keyAccountAbilities.map((item, index) => (
            <li key={index}>
                {item}
              </li>
          ))}
        </ul>
    </div>

    <div className='pl-2'>
        <strong>Core Competencies:</strong>
        <ul className='list-disc list-inside space-y-2 text-blue-600 my-4 pl-2'>
            {selectedPrimaryTitle.description.coreCompetencies.map((item, index) => (
            <li key={index}>
                <Link
                to={item.link}
                onClick={handleCompetencies}
                >
                    {item.name}
                </Link>
            </li>
            ))}
        </ul>
    </div>

    <div className='pl-2'>
        <strong>Functional Competencies:</strong>
        <ul className='list-disc list-inside space-y-2 text-blue-600 my-4 pl-2'>
            {selectedPrimaryTitle.description.functionCompetencies.map((item, index) => (
            <li key={index}>
                <Link
                    to={item.link}
                    onClick={handleCompetencies}
                   >
                    {item.name}
                </Link>
            </li>
        ))}
        </ul>
    </div>

    <div className='pl-2'>
        <strong>Core Skills:</strong>
        <ul className='list-disc list-inside space-y-2 text-gray-500 my-4 pl-2'>
            {selectedPrimaryTitle.description.coreSkills.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
    </div>

    <div className='pl-2'>
        <strong>Technical Knowledge:</strong>
        <p className='my-4 text-blue-600 pl-2 underline'>
        <Link to={'/tshape'} onClick={handleTshape} target='blank'>
            {selectedPrimaryTitle.description.technicalKnowledge}
            </Link>
            </p>
    </div>

    <div className='pl-2'>
        <strong>Must Have Professional Qualifications:</strong>
        <ul className='list-disc list-inside space-y-2 text-gray-500 my-4 pl-2'>
            {selectedPrimaryTitle.description.qualifications.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
</div>
</div>
      )
      }
      </div>
  )
    
}

export default Primary;