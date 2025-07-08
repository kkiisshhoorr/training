import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addTask = () => {
    if (task.trim()) {
      const newTask = { id: Date.now(), text: task, done: false };
      setTasks(prev => [...prev, newTask]);
      setTask('');
    }
  };

  const clearTasks = () => {
    setTasks(prev => prev.filter(task => !task.done));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const toggleBackground = () => setIsDarkMode(prev => !prev);

  return (
    <TaskContext.Provider value={{
      task, setTask, tasks, setTasks,
      addTask, clearTasks, toggleTaskDone,
      isDarkMode, toggleBackground
    }}>
      {children}
    </TaskContext.Provider>
  );
};
