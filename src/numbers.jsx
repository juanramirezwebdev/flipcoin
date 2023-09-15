import React from 'react';

const numbers = [1, 2, 3, 4, 5];

const UpdatedNums = () => {
  return (
    <ul>
      {numbers.map((number) => (
        <li>{number + 1}</li>
      ))}
    </ul>
  );
};

export default UpdatedNums;

