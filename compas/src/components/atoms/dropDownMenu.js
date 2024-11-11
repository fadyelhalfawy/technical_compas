import React from "react";

const DropDownMenu = ({
    option, handleOption, options, textValue
}) => {
  
    return (
        <select id={option} className="w-full border-2 rounded pl-3" value={option} onChange={handleOption}>
        <option value="">{ textValue }</option>
            {options.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
  )};
  
  export default DropDownMenu;