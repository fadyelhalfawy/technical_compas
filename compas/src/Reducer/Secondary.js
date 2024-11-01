import React from 'react';
import { Link } from 'react-router-dom';
import Departement from './Departement';
import Practice from './Practice';
import Title from './Title';
import { useNavigate  } from 'react-router-dom';

const Secondary = ({ 
    Departments, secondaryDepartment, selectedSecondaryDepartment, secondaryPractice, secondaryPractices,
    selectedSecondaryPractice, secondaryTitle, secondaryTitles, selectedSecondaryTitle, handleDepartment,
    handlePractice, handleTitle, handleCompetencies }) => {

      const navigate = useNavigate();

      const handleTshape = (e) => {
        e.preventDefault();
    
        navigate('/tshape', {
            state: { selectedTable: secondaryPractice, selectedTitle: secondaryTitle },
          });
      }

  return (
    <div className="space-y-4">
      <Departement 
        Departments={Departments}
        department={secondaryDepartment}
        handleDepartment={handleDepartment}
      />

        {selectedSecondaryDepartment && (
            <div className='border border-2 p-3'>
              <Practice
                practice={secondaryPractice}
                practices={secondaryPractices}
                handlePractice={handlePractice}
              />
            </div>
          
      )}

      {selectedSecondaryPractice && (
        <div className='border border-2 p-3'>
          <Title 
            title={secondaryTitle}
            titles={secondaryTitles}
            handleTitle={handleTitle}
          />
        </div>
        
      )}

{selectedSecondaryTitle && (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="border border-gray-300 rounded-lg p-2 w-full my-4">

    
    <div className='pl-2'>
        <strong>Job Title:</strong>
        <p className='my-4 text-gray-500'>{ selectedSecondaryTitle.title }</p>
    </div>

    <div className='pl-2'> 
    <strong>Function:</strong>
    <p className='my-4 text-gray-500'>{selectedSecondaryTitle.description.function}</p>
    </div>

    <div className='pl-2'>
        <strong>Sub function:</strong>
        <p className='my-4 text-gray-500'>{selectedSecondaryTitle.description.subFunction}</p>
    </div>

    <div className='pl-2'>
        <strong >Reports to:</strong>
        <p className='my-4 text-gray-500'>{selectedSecondaryTitle.description.reportsTo}</p>
    </div>

    <div className='pl-2'>
        <strong>Job purpose:</strong>
        <p className='my-4 text-gray-500'>{selectedSecondaryTitle.description.jobPurpose}</p>
    </div>

    <div className='pl-2'>
        <strong>Key Accountabilities and decision ownership:</strong>
        <ul className='list-disc list-inside space-y-2 text-gray-500 my-4 pl-2'>
            {selectedSecondaryTitle.description.keyAccountAbilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </div>

    <div className='pl-2'>
        <strong>Core Competencies:</strong>
        <ul className='list-disc list-inside space-y-2 text-blue-600 my-4 pl-2'>
            {selectedSecondaryTitle.description.coreCompetencies.map((item, index) => (
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
            {selectedSecondaryTitle.description.functionCompetencies.map((item, index) => (
            <li key={index}>
                <Link 
                  to={item.link}
                  onClick={handleCompetencies}>
                    {item.name}
                </Link>
            </li>
        ))}
        </ul>
    </div>

    <div className='pl-2'>
        <strong>Core Skills:</strong>
        <ul className='list-disc list-inside space-y-2 text-gray-500 my-4 pl-2'>
            {selectedSecondaryTitle.description.coreSkills.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
    </div>

    <div className='pl-2'>
        <strong>Technical Knowledge:</strong>
        <p className='my-4 text-blue-600 pl-2 underline'>
            <Link to='/tshape' onClick={handleTshape} target='_blank'> 
            {selectedSecondaryTitle.description.technicalKnowledge}
                </Link>
                </p>
    </div>

    <div className='pl-2'>
        <strong>Must Have Professional Qualifications:</strong>
        <ul className='list-disc list-inside space-y-2 text-gray-500 my-4 pl-2'>
            {selectedSecondaryTitle.description.qualifications.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
</div>
</div>
      )
      }
      </div>
  );
};

export default Secondary;