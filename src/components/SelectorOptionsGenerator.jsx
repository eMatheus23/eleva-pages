import React from 'react';

export default function OptionsGenerator({array}) {
  return (
    <>
      {array.map((item, key) => (
        <option key={key} value={item.value}>
          {item.label}
        </option>
      ))}
    </>
  )
}