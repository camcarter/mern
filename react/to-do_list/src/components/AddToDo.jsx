import React, { useState } from "react";

const AddTodo = (props) => {
  const { todos, aTD: addToToDos } = props;

  const [todo, setTodo] = useState({
    task: "",
    isComplete: false,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    if (todo.task) {
      addToToDos([...todos, todo]);
      setTodo({
        task: "",
        isComplete: false,
      });
    }
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  return (
    <fieldset>
      <legend>AddToDo</legend>
      <form onSubmit={submitHandler}>
        <p>
          <input
            onChange={inputHandler}
            name="task"
            type="text"
            value={todo.task}
          />
        </p>
        <button>Add</button>
      </form>
    </fieldset>
  );
};

export default AddTodo;
