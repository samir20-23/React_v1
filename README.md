Got it! Here's the updated and simplified version without extra explanations and in the format you prefer.

---

### **1. Installation Guide (`installation.md`)**

```markdown
# React JS Installation Guide

1. Open your terminal.
2. Run the following command to install React:

```bash
npx create-react-app my-app
```

3. Go to your project folder:

```bash
cd my-app
```

4. Start the development server:

```bash
npm start
```

Your React app should now be running at `http://localhost:3000`.
```

---

### **2. To-Do List Tutorial (`todo-list-tutorial.md`)**

```markdown
# To-Do List Tutorial

1. Open `src/App.js` and replace the code with:

```javascript
import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => setTask(e.target.value);
  
  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={handleInputChange} 
        placeholder="Add a new task" 
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

2. Add this to `src/App.css` for basic styling:

```css
.App {
  text-align: center;
  margin-top: 50px;
}

input {
  padding: 10px;
  width: 300px;
  margin-right: 10px;
}

button {
  padding: 10px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}
```

Now, you have a simple To-Do List app!
```

---

This should meet your needs for simplicity! Just follow the steps, and you'll have your React app running smoothly. Let me know if you need further adjustments!