import React, { useState } from "react";

const NewTodoForm = ({ createTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    createTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo</label>
      <input
        id="task"
        type="text"
        placeholder="New Todo"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
