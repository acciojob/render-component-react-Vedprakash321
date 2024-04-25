// ReactMemo.js
import React, { useState } from 'react';

const ChildComponent = React.memo(({ value }) => {
  console.log('Rendering ChildComponent');
  return <p>Value: {value}</p>;
});

const ReactMemo = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>React Memo Example</h2>
      <button onClick={handleIncrement}>Increment Count</button>
      <ChildComponent value={count} />
    </div>
  );
};

export default ReactMemo;