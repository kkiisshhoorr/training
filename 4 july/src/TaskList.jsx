import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
