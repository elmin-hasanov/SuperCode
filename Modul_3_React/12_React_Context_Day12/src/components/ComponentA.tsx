import { ComponentB } from './ComponentB';

export function ComponentA() {
  return (
    <div className="component">
      Component A<ComponentB></ComponentB>
    </div>
  );
}

// * Ohne Kontext muessten wir die Daten Schicht fuer Schicht mit Props übergeben
// * => "Prop Drilling"
// type ComponentAProps ={
//     userName: string
// }

// export function ComponentA(props: ComponentAProps ){
//     return <div className="component">
//         Component A
//         <ComponentB userName={props.userName}></ComponentB>
//     </div>
// }
