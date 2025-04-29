import React from 'react';
import NachrichtContext from './context/NachrichtContext';
import KindA from './components/KindA';
import KindB from './components/KindB';

const App: React.FC = () => {
  const nachricht = 'Hallo an alle Kinder! 🤗 <3  ddd asdasd';

  return (
    <NachrichtContext.Provider value={nachricht}>
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>👨‍👩‍👧‍👦 Familien-Komponenten mit useContext (TS + Vite)</h1>
        <KindA />
        <div style={{ height: '1rem' }} />
        <KindB />
      </div>
    </NachrichtContext.Provider>
  );
};

export default App;
