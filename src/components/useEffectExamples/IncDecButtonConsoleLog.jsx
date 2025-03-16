import React, { useEffect, useState } from 'react'

function IncDecButtonConsoleLog() {
    const[count, setCount] = useState(0);

    const increment = () => setCount(count+1);
    const decrement = () => setCount(count-1);

    useEffect( () => {
        console.log("Component Mounted!");
    }, [] );

  return (
    <div>
      <p>Count : {count} </p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default IncDecButtonConsoleLog
