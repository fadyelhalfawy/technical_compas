import React, { useState } from 'react';
import jsonData from './kb_itworx.json';
import Primary from './Primary';
import Secondary from './Secondary';

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
            <Primary 
                Departments={Departments}
                selectedPrimaryDepartment={selectedPrimaryDepartment}
                primaryDepartment={primaryDepartment}
                primaryPractices={primaryPractices}
                selectedPrimaryPractice={selectedPrimaryPractice}
                primaryPractice={primaryPractice}
                primaryTitles={primaryTitles}
                selectedPrimaryTitle={selectedPrimaryTitle}
                primaryTitle={primaryTitle}
                handleDepartment={handlePrimaryDepartmentChange}
                handlePractice={handlePrimaryPracticeChange}
                handleTitle={handlePrimaryTitleChange}
            />

            <Secondary 
                Departments={Departments}
                selectedSecondaryDepartment={selectedSecondaryDepartment}
                secondaryDepartment={secondaryDepartment}
                secondaryPractices={secondaryPractices}
                selectedSecondaryPractice={selectedSecondaryPractice}
                secondaryPractice={secondaryPractice}
                secondaryTitles={secondaryTitles}
                selectedSecondaryTitle={selectedSecondaryTitle}
                secondaryTitle={secondaryTitle}
                handleDepartment={handleSecondaryDepartmentChange}
                handlePractice={handleSecondaryPracticeChange}
                handleTitle={handleSecondaryTitleChange}
            />
        </div>
    </div>
  );
};

export default DepartmentSelector;