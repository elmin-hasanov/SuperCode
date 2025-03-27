import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export type ToDo = {
  title: string;
  completed: boolean;
};

const todos: ToDo[] = [
  { title: "Rasen mähen", completed: false },
  { title: "Pizza backen", completed: false },
  { title: "Destructuring lernen", completed: true },
];

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
