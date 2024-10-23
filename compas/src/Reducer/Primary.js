import React from 'react';

const Primary = ({ 
    Departments, selectedPrimaryDepartment, primaryDepartment, primaryPractice,
     primaryPractices, selectedPrimaryPractice, primaryTitle, primaryTitles,
      selectedPrimaryTitle, handleDepartment, handlePractice, handleTitle }) => {

  return (
    <div className="space-y-4">
        <select id="department" className="w-full border-2 rounded p-2" value={primaryDepartment} onChange={handleDepartment}>
          <option value="">Select Department</option>
          {Departments.map((department, index) => (
            <option key={index} value={department.name}>
              {department.name}
            </option>
          ))}
        </select>

        {selectedPrimaryDepartment && (
            <div className='border border-2 p-3'>
                <select id="practice" className="w-full border-2 rounded p-2" value={primaryPractice} onChange={handlePractice}>
                <option value="">Select Practice</option>
                {primaryPractices.map((practice, index) => (
                <option key={index} value={practice.name}>
                {practice.name}
              </option>
            ))}
          </select>
            </div>
          
      )}

      {selectedPrimaryPractice && (
        <div className='border border-2 p-3'>
        <select id="title" className="w-full border-2 rounded p-2" value={primaryTitle} onChange={handleTitle}>
          <option value="">Select Title</option>
          {primaryTitles.map((title, index) => (
            <option key={index} value={title.title}>
              {title.title}
            </option>
          ))}
        </select>
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
            <li key={index}>{item}</li>
          ))}
        </ul>
    </div>

    <div className='pl-2'>
        <strong>Core Competencies:</strong>
        <ul className='list-disc list-inside space-y-2 text-blue-600 my-4 pl-2'>
            {selectedPrimaryTitle.description.coreCompetencies.map((item, index) => (
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
            {selectedPrimaryTitle.description.functionCompetencies.map((item, index) => (
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
            {selectedPrimaryTitle.description.coreSkills.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
    </div>

    <div className='pl-2'>
        <strong>Technical Knowledge:</strong>
        <p className='my-4 text-blue-600 pl-2 underline'>
        <a href='www.google.com' target='_blanck' rel='noreferrer'>
            {selectedPrimaryTitle.description.technicalKnowledge}
            </a>
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