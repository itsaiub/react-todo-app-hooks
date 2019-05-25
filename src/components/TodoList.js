import React, { useState } from "react";
import uuid from "uuid/v4";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = newTodo => {
    setTodos([...todos, { id: uuid(), task: newTodo }]);
  };

  const updateTodo = (id, updatedTask) => {
    const updatedTodo = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>TodoList!</h1>
      <NewTodoForm createTodo={createTodo} />
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
