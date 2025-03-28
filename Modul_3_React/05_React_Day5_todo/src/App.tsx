import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";


export type ToDo = {
  id: string;
  title: string;
  completed: boolean;
};




function App() {

  //! das hier funktioniert zwar, ist aber noch nicht zuverlaessig.
  //! Wird später noch erweitert
  const storedTodos = JSON.parse( localStorage.getItem("todos") ?? "[]")
  const [todos, setTodos] = useState(storedTodos)
  // const [count, setCount] = useState(0)

  console.log("rendering now")

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log("useEffect läuft jetzt")
  },[todos])
  // * zweites argument an useEffect => dependency array
  // * wenn einer der werte darin sich ändert, wird der Effekt ausgeführt


  return (
    <div>
      {/* <marquee>🐈</marquee> */}
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos}/>
      {/* <button onClick={()=>{setCount(count+1)}}>{count}</button> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
