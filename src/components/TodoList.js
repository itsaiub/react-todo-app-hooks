import React, { useState } from "react";
import uuid from "uuid/v4";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = newTodo => {
    setTodos([...todos, { id: uuid(), task: newTodo, completed: false }]);
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

  const toggleCompletion = id => {
    const updatedTodo = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodo);
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
            toggleCompletion={toggleCompletion}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
