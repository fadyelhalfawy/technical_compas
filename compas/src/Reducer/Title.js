const Title = ({
    title, handleTitle, titles
}) => {
    return (
        <select id="title" className="w-full border-2 rounded p-2" value={title} onChange={handleTitle}>
        <option value="">Select Title</option>
        {titles.map((title, index) => (
          <option key={index} value={title.title}>
            {title.title}
          </option>
        ))}
      </select>
    );
  };
  
  export default Title;