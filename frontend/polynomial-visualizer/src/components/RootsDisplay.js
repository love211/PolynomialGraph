import React from 'react';

const RootsDisplay = ({ roots }) => {
  return (
    <div>
      <h2>Roots</h2>
      {roots&&roots.length > 0 ? (
        <ul>
          {roots.map((root, index) => (
            <li key={index}>{root}  </li>
          ))}
        </ul>
      ) : (
        <p>No roots found</p>
      )}
    </div>
  );
};

export default RootsDisplay;
