import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { task: "walk the dog" },
    { task: "Groom chickens" }
  ]);
  console.log(todos);
  return (
    <div>
      <h1>TodoList!</h1>
      <ul>
        {todos.map(todo => (
          <Todo task={todo.task} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
