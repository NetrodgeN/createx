import React from 'react';

const MySelect = ({options, value, onChange, defaultValue, className}) => {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
      className={className}
    >
      <option defaultValue={defaultValue}>
        {defaultValue}
      </option>
      {options.map(option =>
          <option key={option} value={option}>
            {option}
          </option>
      )}
    </select>
  );
};

export default MySelect;