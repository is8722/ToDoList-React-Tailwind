import React from "react";
import propTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: propTypes.array.isRequired,
  onToggle: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired, 
};

export default TodoList;

