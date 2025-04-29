import React from 'react';
import Enkel from './Enkel';

const KindA: React.FC = () => {
  return (
    <div
      style={{ padding: '1rem', background: '#cce5ff', borderRadius: '1rem' }}
    >
      <h2>Kind A</h2>
      <Enkel />
    </div>
  );
};

export default KindA;
