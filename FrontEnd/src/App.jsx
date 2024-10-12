import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"

function App() {
    const [todos, setTodos] = useState([]);

    // bad way of getting the data from the backend and displaying it on the DOM.
    fetch("http://localhost:3000/todos")
     .then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
     })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
