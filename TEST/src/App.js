import React from 'react';
import ReactDom from 'react-dom/client';
import reportWebVitals from './'
import logo from './img.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* Fixed typo here */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Start() {
  return <h1>Hello</h1>;
}

export { Start, App }; // Named exports