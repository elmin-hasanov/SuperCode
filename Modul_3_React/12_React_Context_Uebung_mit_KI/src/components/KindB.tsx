import React, { useContext } from 'react';
import NachrichtContext from '../context/NachrichtContext';

const KindB: React.FC = () => {
  const nachricht = useContext(NachrichtContext);

  return (
    <div
      style={{ padding: '1rem', background: '#d4edda', borderRadius: '1rem' }}
    >
      <h2>Kind B</h2>
      🧒 Kind B bekommt: <strong>{nachricht}</strong>
    </div>
  );
};

export default KindB;
