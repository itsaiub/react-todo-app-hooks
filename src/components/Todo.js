import React, { useState } from "react";

const Todo = ({ updateTodo, removeTodo, toggleCompletion, todo }) => {
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

  const handleToggle = e => {
    toggleCompletion(todo.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="todo">
        <form className="todo-editForm" onSubmit={handleUpdate}>
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
      <div className="todo">
        <li
          onClick={handleToggle}
          className={todo.completed ? "todo-task completed" : "todo-task"}
        >
          {todo.task}
        </li>
        <div className="todo-buttons">
          <button onClick={() => setIsEditing(!isEditing)}>
            <i className="fas fa-pen" />{" "}
          </button>
          <button onClick={handleRemoveTodo}>
            <i className="fas fa-trash" />{" "}
          </button>
        </div>
      </div>
    );
  }
  return result;
};

export default Todo;
