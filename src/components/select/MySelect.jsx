import React from 'react';

const MySelect = ({options, value, onChange, defaultValue}) => {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value)}
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