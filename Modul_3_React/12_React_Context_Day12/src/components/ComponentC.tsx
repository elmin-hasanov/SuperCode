import { useContext } from 'react';
import { nameContext } from '../contexts/nameContext';
import { counterContext } from '../contexts/counterContext';

export function ComponentC() {
  const userName = useContext(nameContext);
  const { count, setCount } = useContext(counterContext);

  return (
    <div className="component">
      Component C
      <br />
      <strong>{userName}</strong>
      <br />
      {count}
      <br />
      <button
        onClick={() => {
          setCount((oldValue) => oldValue + 1);
        }}
      >
        Increment!
      </button>
    </div>
  );
}
