import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeForm from './components/EmployeeForm'; // Importing the EmployeeForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <main>
        <h1>Employee Management System</h1>
        <EmployeeForm /> {/* Using the EmployeeForm component */}
      </main>
    </div>
  );
}

export default App;
