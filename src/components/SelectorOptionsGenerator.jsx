import React from 'react';

export default function OptionsGenerator({array}) {
  return (
    <>
      {array.map((formation, key) => (
        <option key={key} value={formation.value}>
          {formation.label}
        </option>
      ))}
    </>
  )
}