import { ComponentC } from './ComponentC';

export function ComponentB() {
  return (
    <div className="component">
      Component B
      <ComponentC />
    </div>
  );
}
