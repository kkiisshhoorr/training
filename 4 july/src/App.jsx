import React, { useContext } from 'react';
import { TaskProvider, TaskContext } from './TaskContext';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './styling.css';

function Appcontent() {
  const { isDarkMode, toggleBackground } = useContext(TaskContext);

  return (
    <div className={`main-container ${isDarkMode ? 'dark' : 'light'}`}>
      <button className="tog" onClick={toggleBackground}>Mode Change</button>
      <h1>TO DO LIST</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <Appcontent />
    </TaskProvider>
  );
}

export default App;
