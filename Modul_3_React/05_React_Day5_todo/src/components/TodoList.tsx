import { ToDo } from "../App";


// Hier geben wir die Typen der zulaessigen "Attribute", "Parameter" oder eben "Props" unserer Komponente an
type TodoListProps = {
  todos: ToDo[];
};

function TodoList(props: TodoListProps) {
  const { todos } = props; // hier destructuring um todos aus props zu ziehen
  
  return (
    <ul>
      {todos.map((item) => (
        // hier wandeln wir unseren Array zu JSX um, so dass er dargestellt werden kann
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
