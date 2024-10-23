import React from 'react';

const Secondary = ({ 
    Departments, secondaryDepartment, selectedSecondaryDepartment, secondaryPractice, secondaryPractices,
    selectedSecondaryPractice, secondaryTitle, secondaryTitles, selectedSecondaryTitle, handleDepartment,
    handlePractice, handleTitle }) => {

  return (
    <div className="space-y-4">
        <select id="secondaryDepartment" className="w-full border-2 rounded p-2" value={secondaryDepartment} onChange={handleDepartment}>
          <option value="">Select Department</option>
          {Departments.map((department, index) => (
            <option key={index} value={department.name}>
              {department.name}
            </option>
          ))}
        </select>

        {selectedSecondaryDepartment && (
            <div className='border border-2 p-3'>
            <select id="secondaryPractice" className="w-full border-2 rounded p-2" value={secondaryPractice} onChange={handlePractice}>
            <option value="">Select Practice</option>
            {secondaryPractices.map((practice, index) => (
              <option key={index} value={practice.name}>
                {practice.name}
              </option>
            ))}
          </select>
            </div>
          
      )}

      {selectedSecondaryPractice && (
        <div className='border border-2 p-3'>
        <select id="secondaryTitle" className="w-full border-2 rounded p-2" value={secondaryTitle} onChange={handleTitle}>
          <option value="">Select Title</option>
          {secondaryTitles.map((title, index) => (
            <option key={index} value={title.title}>
              {title.title}
            </option>
          ))}
        </select>
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
                <a href={item.link} target='_blank' rel='noreferrer'>
                    {item.name}
                </a>
            </li>
            ))}
        </ul>
    </div>

    <div className='pl-2'>
        <strong>Functional Competencies:</strong>
        <ul className='list-disc list-inside space-y-2 text-blue-600 my-4 pl-2'>
            {selectedSecondaryTitle.description.functionCompetencies.map((item, index) => (
            <li key={index}>
                <a href={item.link} target='_blank' rel='noreferrer'>
                    {item.name}
                </a>
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
            <a href='www.google.com' target='_blanck' rel='noreferrer'> 
            {selectedSecondaryTitle.description.technicalKnowledge}
                </a>
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