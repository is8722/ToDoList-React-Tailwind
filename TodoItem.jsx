import React from "react";
import propTypes from "prop-types";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          onChange={() => onToggle(todo.id)}
          checked={todo.completed}
        />
        {todo.text}
      </label>
      <button onClick={() => onDelete(todo.id)}>Supprimer</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  onToggle: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired, 
};

export default TodoItem;

