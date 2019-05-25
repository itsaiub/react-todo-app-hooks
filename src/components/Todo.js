import React, { useState } from "react";

const Todo = ({ updateTodo, removeTodo, todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  const handleUpdate = e => {
    e.preventDefault();
    updateTodo(todo.id, task);
    setIsEditing(false);
  };

  let result;
  if (isEditing) {
    result = (
      <div>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        <button onClick={handleRemoveTodo}>X</button>
        <li>{todo.task}</li>
      </div>
    );
  }
  return result;
};

export default Todo;
