import React from 'react';

const OptionsGenerator = ({ array }) => {
  return (
    <>
      {array.map((item, key) => (
        <option key={key} value={item.value}>
          {item.label}
        </option>
      ))}
    </>
  );
};

export default OptionsGenerator;
