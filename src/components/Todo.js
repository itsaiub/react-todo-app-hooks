import React from "react";

const Todo = ({ task }) => {
  return (
    <div>
      <button>Edit</button>
      <button>X</button>
      <li>{task}</li>
    </div>
  );
};

export default Todo;
