import React, { useState } from 'react';
import './App.css';
import PolynomialForm from './components/PolynomialForm';
import RootsDisplay from './components/RootsDisplay';
import PolynomialGraph from './components/PolynomialGraph';

function App() {
  const [roots, setRoots] = useState([]);
  const [coefficients, setCoefficients] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Polynomial Solver</h1>
      </header>
      <PolynomialForm setRoots={setRoots} setCoefficients={setCoefficients} />
      <RootsDisplay roots={roots} />
      <PolynomialGraph coefficients={coefficients} />
    </div>
  );
}

export default App;
