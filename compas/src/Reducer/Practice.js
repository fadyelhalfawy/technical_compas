const Departement = ({
    practice, handlePractice, practices
}) => {
    return (
        <select id="practice" className="w-full border-2 rounded p-2" value={practice} onChange={handlePractice}>
                <option value="">Select Practice</option>
                {practices.map((practice, index) => (
                <option key={index} value={practice.name}>
                {practice.name}
              </option>
            ))}
          </select>
  )};
  
  export default Departement;