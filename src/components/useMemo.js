import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [factorial, setFactorial] = useState(0);

  const calculateFactorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const memoizedFactorial = useMemo(() => calculateFactorial(number), [number]);

  const handleNumberChange = (e) => {
    const value = parseInt(e.target.value);
    setNumber(value);
    setFactorial(calculateFactorial(value));
  };

  return (
    <div>
      <h2>Calculate Factorial</h2>
      <label>
        Enter a number:
        <input type="number" value={number} onChange={handleNumberChange} />
      </label>
      <p>Factorial of {number} is: {factorial}</p>
      <p>Calculated using useMemo: {memoizedFactorial}</p>
    </div>
  );
};

export default UseMemo;
