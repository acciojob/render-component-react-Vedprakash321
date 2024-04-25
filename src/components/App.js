import React, {Component, useEffect, useState} from "react";
import UseMemo from './useMemo';
import UseMemo from './ReactMemo';
import '../styles/App.css';

const App = () => {
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
