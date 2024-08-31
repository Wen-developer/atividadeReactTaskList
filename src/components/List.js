import Item from './Item';
import React from 'react';

function List({ tasks, setTasks }) {
  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
    
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <Item
          key={index}
          task={task}
          index={index}
          toggleTaskCompletion={toggleTaskCompletion}
          removeTask={removeTask}/>
      ))}
    </ul>
  );
}

export default List;
