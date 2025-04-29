import { createContext, useState } from 'react';

// * Da wir count/setCount hier noch nicht haben (es entsteht erst in der App)
// * koennen wir keinen sinnvollen Defaultwert vergeben.
// * Da ohne Defaultwert keine Typinferenz stattfindet, müssen wir den Typ explizit definieren
type CounterContext = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

// * createContext will eigentlich einen Defaultwert, der dem Typ entspricht.
// * Da wir diesen hier noch nicht liefern können, übergeben wir null
// * und unterdrücken mit ! den dann eigentlich auftretenden Typfehler
export const counterContext = createContext<CounterContext>(null!);

type CounterProviderProps = {
  children: React.ReactNode;
};

export function CounterProvider({ children }: CounterProviderProps) {
  const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount((oldValue) => oldValue + 1);
  // };
  // const reset = () => {
  //   setCount(0);
  // };
  // const decrement = () => {
  //   setCount((oldValue) => oldValue - 1);
  // };

  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
}
