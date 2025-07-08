import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

function TaskInput() {
  const { task, setTask, addTask, clearTasks } = useContext(TaskContext);

  return (
    <div className="input-block">
      <div className="input-row">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask} className="but">Add</button>
      </div>
      <div className="button-row">
        <button onClick={clearTasks} className="clear">Clear</button>
      </div>
    </div>
  );
}

export default TaskInput;
