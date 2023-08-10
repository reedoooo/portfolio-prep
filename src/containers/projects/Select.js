import React from 'react';

const Select = ({ value, onChange, options }) => (
  <select value={value} onChange={onChange}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Select;
