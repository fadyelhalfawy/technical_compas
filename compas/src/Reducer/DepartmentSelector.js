import React, { useState } from 'react';
import jsonData from './kb_itworx.json';

const DepartmentSelector = () => {
    const [primaryDepartment, setprimaryDepartment] = useState("");
    const [primaryPractice, setprimaryPractice] = useState("");
    const [primaryTitle, setprimaryTitle] = useState("");
    
    const [secondaryDepartment, setSecondaryDepartment] = useState("");
    const [secondaryPractice, setSecondaryPractice] = useState("");
    const [secondaryTitle, setSecondaryTitle] = useState("");

    const handlePrimaryDepartmentChange = (e) => {
        setprimaryDepartment(e.target.value);
        setprimaryPractice("");
        setprimaryTitle("");
    }
  
  const handlePrimaryPracticeChange = (e) => {
    setprimaryPractice(e.target.value);
    setprimaryTitle("");
  };

  const handlePrimaryTitleChange = (e) => {
    setprimaryTitle(e.target.value);
  };

  const handleSecondaryDepartmentChange = (e) => {
    setSecondaryDepartment(e.target.value);
    setSecondaryPractice("");
    setSecondaryTitle("");
}

const handleSecondaryPracticeChange = (e) => {
    setSecondaryPractice(e.target.value);
    setSecondaryTitle("");
};

const handleSecondaryTitleChange = (e) => {
    setSecondaryTitle(e.target.value);
};

  const Departments = jsonData.departments;
  const selectedPrimaryDepartment = jsonData.departments.find(dep => dep.name === primaryDepartment);

  const primaryPractices = selectedPrimaryDepartment ? selectedPrimaryDepartment.practices : [];
  const selectedPrimaryPractice = primaryPractices.find(prac => prac.name === primaryPractice);

  const primaryTitles = selectedPrimaryPractice ? selectedPrimaryPractice.titles : [];
  const selectedPrimaryTitle = primaryTitles.find(title => title.title === primaryTitle);

  const selectedSecondaryDepartment = jsonData.departments.find(dep => dep.name === secondaryDepartment);
  
  const secondaryPractices = selectedSecondaryDepartment ? selectedSecondaryDepartment.practices : [];
  const selectedSecondaryPractice = secondaryPractices.find(prac => prac.name === secondaryPractice);
  
  const secondaryTitles = selectedSecondaryPractice ? selectedSecondaryPractice.titles : [];
  const selectedSecondaryTitle = secondaryTitles.find(title => title.title === secondaryTitle);
  
  return (
    <div className="p-6">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className="space-y-4">
        <select id="department" className="w-full border-2 rounded p-2" value={primaryDepartment} onChange={handlePrimaryDepartmentChange}>
          <option value="">Select Department</option>
          {Departments.map((department, index) => (
            <option key={index} value={department.name}>
              {department.name}
            </option>
          ))}
        </select>

        {selectedPrimaryDepartment && (
            <div className='border border-2 p-3'>
                <select id="practice" className="w-full border-2 rounded p-2" value={primaryPractice} onChange={handlePrimaryPracticeChange}>
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
        <select id="title" className="w-full border-2 rounded p-2" value={primaryTitle} onChange={handlePrimaryTitleChange}>
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

      <div className="space-y-4">
        <select id="secondaryDepartment" className="w-full border-2 rounded p-2" value={secondaryDepartment} onChange={handleSecondaryDepartmentChange}>
          <option value="">Select Department</option>
          {Departments.map((department, index) => (
            <option key={index} value={department.name}>
              {department.name}
            </option>
          ))}
        </select>

        {selectedSecondaryDepartment && (
            <div className='border border-2 p-3'>
            <select id="secondaryPractice" className="w-full border-2 rounded p-2" value={secondaryPractice} onChange={handleSecondaryPracticeChange}>
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
        <select id="secondaryTitle" className="w-full border-2 rounded p-2" value={secondaryTitle} onChange={handleSecondaryTitleChange}>
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
        </div>
      
    </div>
  );
};

export default DepartmentSelector;