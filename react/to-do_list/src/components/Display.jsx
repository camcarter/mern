import React from "react";

const Display = (props) => {
  const { todos, aTD } = props;

  const checkboxHandler = (event) => {
    let { id, checked } = event.target;
    id = parseInt(id);
    console.log(event);
    console.log(`id: ${id} || checked: ${checked}`);
    const newTodos = [...todos];
    const newTodoObj = newTodos[id];
    newTodoObj.isComplete = checked;
    newTodos.splice(id, 1, newTodoObj);

    aTD(newTodos);
  };

  const removeTask = (event, ind) => {
    const newTodos = [...todos];
    newTodos.splice(ind, 1);
    aTD(newTodos);
  };

  return (
    <fieldset>
      <legend>Display</legend>
      <form onSubmit={(e) => e.preventDefault()}>
        {todos.map((tObj, ind) => {
          const { task, isComplete } = tObj;
          return (
            <p key={ind}>
              {isComplete ? <s>{task}</s> : { task }}
              <input
                onChange={checkboxHandler}
                type="checkbox"
                id={ind}
                checked={isComplete}
              />
              {isComplete && (
                <button
                  onClick={(e) => removeTask(e, ind)}
                  style={{ marginLeft: "15px", padding: "10px" }}
                >
                  Delete
                </button>
              )}
            </p>
          );
        })}
      </form>
    </fieldset>
  );
};

export default Display;
