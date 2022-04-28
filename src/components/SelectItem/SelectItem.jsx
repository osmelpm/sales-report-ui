const SelectItem = ({ label, handleChange, options }) => {
  return (
    <div>
      <label htmlFor={`${label}-id`}>{label}</label>
      <select name={label} onChange={handleChange}>
        <option value="">------------</option>
        {options.map((el) => (
          <option key={`${el} + _id`} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectItem;
