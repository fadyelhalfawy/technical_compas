const Departement = ({
    department, handleDepartment, Departments
}) => {
    return (
        <select id="department" className="w-full border-2 rounded p-2" value={department} onChange={handleDepartment}>
        <option value="">Select Department</option>
        {Departments.map((department, index) => (
          <option key={index} value={department.name}>
            {department.name}
          </option>
        ))}
      </select>
  )};
  
  export default Departement;