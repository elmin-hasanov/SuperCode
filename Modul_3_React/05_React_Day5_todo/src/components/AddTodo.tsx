import { useState } from "react";

const AddTodo = () => {
  // in diesem state wollen wir den aktuellen wert des inputs speichern, um auf diesen zugreifen zu können
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: React.MouseEventHandler = (event) => {
    event.preventDefault();
    console.log("Submitted:");
    console.log(inputValue);
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
        value={inputValue} // hier sorgen wir dafür, dass der input immer den aktuellen wert des states enthält
        onChange={(event) => {
          // event.target.value enthält den geänderten wert des inputs, und wird im State gespeichert
          setInputValue(event.target.value);
        }}
      />

      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default AddTodo;
