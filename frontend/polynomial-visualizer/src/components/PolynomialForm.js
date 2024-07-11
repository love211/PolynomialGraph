import React, { useState } from 'react';
import axios from 'axios';

const PolynomialForm = ({ setRoots, setCoefficients }) => {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const coefficients = input.split(',').map(Number);
    setCoefficients(coefficients);

    try {
      const response = await axios.post('http://localhost:5000/solve', { coefficients });
      setRoots(response.data.roots);
    } catch (error) {
      console.error('Error solving polynomial:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter coefficients separated by commas"
        required
      />
      <button type="submit">Solve</button>
    </form>
  );
};

export default PolynomialForm;
