import React, { useState } from 'react';
import TodoList from './TodoList';
import './index.css'



function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Faire les courses", completed: false },
    { id: 2, text: "Terminer le projet", completed: true },
    { id: 3, text: "Faire de l'exercice", completed: false }
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask("");
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center my-8">Todo List</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Ajouter une tâche..."
          className="border border-gray-300 p-2 rounded-l"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600"
        >
          Ajouter
        </button>
      </div>
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTask} />
    </div>
  );
}

export default App;
