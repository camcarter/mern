import "./App.css";
import { useState } from "react";
import AddTodo from "./components/AddToDo";
import Display from "./components/Display";

function App() {
  const [todos, addToDo] = useState([]);

  return (
    <fieldset>
      <div>
        <AddTodo todos={todos} aTD={addToDo} />
        <Display todos={todos} aTD={addToDo} />
      </div>
    </fieldset>
  );
}

export default App;
