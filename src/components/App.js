import React, {Component, useEffect, useState} from "react";
import UseMemo from './useMemo';
import UseMemo from './ReactMemo';
import '../styles/App.css';

const App = () => {
  
function App() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  useEffect(() => {
    // Any side effects can be placed here
  }, []);

  const handleAddTodo = () => {
    setTasks([...tasks, 'New todo']);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
  };

  const handleCustomTaskSubmit = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask('');
    } else {
      alert('Task must be more than 5 characters.');
    }
  };




  return (
    <div id="main">
      <button onClick={handleAddTodo}>My todo</button>
      <button onClick={handleIncrement}>Increment</button>
      <div>
        <input
          type="text"
          value={customTask}
          onChange={handleCustomTaskChange}
          placeholder="Enter custom task"
        />
        <button onClick={handleCustomTaskSubmit}>Submit</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <p>Counter: {counter}</p>
      <UseMemo />
      <ReactMemo />
    </div>
  );
  )
}


export default App;
