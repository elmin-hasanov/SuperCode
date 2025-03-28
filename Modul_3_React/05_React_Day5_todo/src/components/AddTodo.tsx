import { useState } from "react";
import { ToDo } from "../App";


type AddTodoProps = {
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}


const AddTodo = (props: AddTodoProps) => {
  // in diesem state wollen wir den aktuellen wert des inputs speichern, um auf diesen zugreifen zu können
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.MouseEventHandler = (event) => {
    event.preventDefault();

    
    const newTodo: ToDo = {
     completed: false,
     title: inputValue,
     id: crypto.randomUUID()
    }

    // props.setTodos((oldTodos)=>oldTodos.concat(newTodo))
    props.setTodos((oldTodos)=>[newTodo, ...oldTodos ])
    // * mit dieser Schreibweise (anonyme Funktion) haben wir Zugriff auf die alten todos, so dass wir neue anhängen können 
  };

  /**
   * Wir verbinden den Input hier in zwei Richtungen mit dem State:
   * So dass bei Änderungen (i.e. Tippen) im Input der State upgedatet wird,
   * aber auch so dass bei Änderungen im State der Input upgedatet wird.
   * Man bezeichnet das dann auch als "Controlled Input"
   */

  return (
    <form>
      <input
        type="text"
        placeholder="Hier bitte dein ToDo"
        value={inputValue} // hier sorgen wir dafür, dass der input immer den aktuellen wert des states enthält
        onChange={(event) => {
          // event.target.value enthält den geänderten wert des inputs, und wird im State gespeichert
          setInputValue(event.target.value);
        }}
      />

      <button disabled={inputValue.length === 0} onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default AddTodo;
