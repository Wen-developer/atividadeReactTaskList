import React from 'react';

function Item({ task, index, toggleTaskCompletion, removeTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(index)}/> {task.text}<button onClick={() => removeTask(index)}>Remove</button>
    </li>
  );
}

export default Item;
