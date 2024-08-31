import React, { useState } from 'react';
import List from './components/List';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  return (
    <div className="App">
      <h1>Tarefas à Fazer</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}/>
      <button onClick={addTask}>Adicionar Tarefa</button>
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
