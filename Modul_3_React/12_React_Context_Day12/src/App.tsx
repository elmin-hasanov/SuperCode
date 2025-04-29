import { ComponentA } from './components/ComponentA';
import { nameContext } from './contexts/nameContext';
import { CounterProvider } from './contexts/counterContext';
import { ComponentD } from './components/ComponentD';

function App() {
  const userName = 'Schuhschnabelstorch';

  return (
    <nameContext.Provider value={userName}>
      <CounterProvider>
        <div>
          <ComponentA />
        </div>
        <div>
          <ComponentD />
        </div>
      </CounterProvider>
    </nameContext.Provider>
  );
}

export default App;
