import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState<number>(0);
  const Inc = () => setCount(count + 1)
  const Dec = () => setCount(count - 1)
  
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={Inc}>+1</button>
        <button onClick={Dec}>-1</button>
      </div>
    </div>
  );
}

export default Counter