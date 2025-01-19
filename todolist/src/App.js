import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);  // State to store todos
  const [input, setInput] = useState("");   // State to store input value

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);  // Empty dependency array means this effect runs only once after initial render

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);  // Runs every time the todos state changes

  // Add a new todo
  const addTodo = () => {
    if (input) {
      const newTodo = { text: input, id: Date.now() };
      setTodos([...todos, newTodo]);
      setInput("");  // Clear input field after adding the todo
    }
  };

  // Remove a todo by id
  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
