  const todolist = [
    "Buy Groceries",
    "Send Email",
    "Finish Project",
    "Write Blog",
    "Bake Cookies",
  ];


  export default function TodoList() {
    const listItems = todolist.map(todo =>
      <li>{todo}</li>
    );
    return <ul>{listItems}</ul>;
  }