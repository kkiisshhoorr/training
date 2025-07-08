import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

function TaskItem({ task }) {
  const { tasks, setTasks, toggleTaskDone } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleDelete = () => {
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  const handleSave = () => {
    setTasks(tasks.map(t => t.id === task.id ? { ...t, text: editedText } : t));
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            style={{ marginRight: '2px' }}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span
            className={task.done ? 'done' : ''}
            onClick={() => toggleTaskDone(task.id)}
            style={{ flex: 1, cursor: 'pointer' }}
          >
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)} style={{ marginRight: '5px' }}>
            Edit
          </button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
