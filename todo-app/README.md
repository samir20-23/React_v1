I understand now! You want to keep your Markdown code as-is and have it render properly in HTML without transforming the Markdown into HTML. The idea is to embed the Markdown directly inside HTML, but display it as raw Markdown code that users can copy or view.

Here’s how you can do that:

### Solution:
1. Use the `<pre>` tag to preserve the formatting.
2. Wrap the Markdown code inside `<code>` tags for proper code block formatting.
3. Use JavaScript to create a "Copy" button to let users copy the raw Markdown code.

Here’s an example of how you can do it:

### HTML with Markdown Code Display

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React JS Installation Guide & To-Do List Tutorial</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      background-color: #f4f7fc;
      margin: 0;
      padding: 0;
      color: #333;
    }

    header {
      background-color: #4CAF50;
      padding: 20px;
      color: white;
      text-align: center;
    }

    .container {
      width: 80%;
      margin: 40px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
      font-size: 24px;
      color: #333;
    }

    pre {
      background-color: #2c3e50;
      color: #ecf0f1;
      padding: 20px;
      border-radius: 8px;
      overflow-x: auto;
      font-size: 16px;
      line-height: 1.6;
      position: relative;
    }

    pre code {
      display: block;
      padding: 0;
      margin: 0;
      font-size: inherit;
      line-height: inherit;
    }

    .guide-section {
      margin-bottom: 40px;
    }

    .tutorial-section {
      background-color: #ecf0f1;
      border-left: 5px solid #3498db;
      padding-left: 20px;
      margin-bottom: 20px;
    }

    .button {
      background-color: #3498db;
      color: white;
      padding: 12px 25px;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      margin-top: 20px;
    }

    .button:hover {
      background-color: #2980b9;
    }

    .copy-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #3498db;
      color: white;
      border: none;
      padding: 8px 12px;
      cursor: pointer;
      border-radius: 4px;
    }

    .copy-btn:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>

  <header>
    <h1>React JS Installation Guide & To-Do List Tutorial</h1>
  </header>

  <div class="container">
    <section class="guide-section">
      <h2>1. Installation Guide (`installation.md`)</h2>
      <div class="tutorial-section">
        <h3>React JS Installation Guide</h3>
        <pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          <code>
# React JS Installation Guide

1. Open your terminal.
2. Run the following command to install React:

   npx create-react-app my-app

3. Go to your project folder:

   cd my-app

4. Start the development server:

   npm start

Your React app should now be running at http://localhost:3000
          </code>
        </pre>
      </div>
    </section>

    <section class="guide-section">
      <h2>2. To-Do List Tutorial (`todo-list-tutorial.md`)</h2>
      <div class="tutorial-section">
        <h3>To-Do List Tutorial</h3>
        <h4>Step 1: Open `src/App.js` and replace the code with:</h4>
        <pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          <code>
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
          </code>
        </pre>

        <h4>Step 2: Add this to `src/App.css` for basic styling:</h4>
        <pre>
          <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          <code>
# To-Do List CSS Styling

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
          </code>
        </pre>
      </div>
    </section>

    <a href="https://reactjs.org" class="button" target="_blank">Learn More About React</a>
  </div>

  <script>
    function copyCode(button) {
      const codeBlock = button.nextElementSibling;
      const textArea = document.createElement('textarea');
      textArea.value = codeBlock.innerText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Code copied to clipboard!');
    }
  </script>

</body>
</html>
```

### Explanation:

1. **Markdown Code in `<pre>` and `<code>`**: The raw Markdown code is placed inside `<pre><code>` tags to ensure it displays properly as it would in a Markdown file.
2. **Copy Button**: Each code block includes a "Copy" button that allows users to copy the raw code when clicked.
3. **No Markdown to HTML Conversion**: The Markdown remains as it is (raw code), so users can copy it exactly as written.

### Result:
- Users can view the raw Markdown in the browser and copy it if needed, without any transformations.
