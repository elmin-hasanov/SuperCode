import { useContext } from 'react';
import { counterContext } from '../contexts/counterContext';

export function ComponentD() {
  const { count } = useContext(counterContext);
  return (
    <div className="component">
      Component D
      <br />
      {count}
    </div>
  );
}
