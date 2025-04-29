import React, { useContext } from 'react';
import NachrichtContext from '../context/NachrichtContext';

const Enkel: React.FC = () => {
  const nachricht = useContext(NachrichtContext);

  return (
    <div
      style={{
        marginTop: '1rem',
        padding: '0.5rem',
        background: '#d6eaff',
        borderRadius: '0.5rem',
      }}
    >
      👶 Enkel bekommt: <strong>{nachricht}</strong>
    </div>
  );
};

export default Enkel;
