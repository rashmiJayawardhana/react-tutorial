import React, { useState } from 'react'

function Array() {
    const[todos, setTodos]=useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

  return (
    <div>
      <button 
        onClick={()=>addTodo("Learn")}>
            Add
      </button>
      <ul>
        {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
        ))}      
      </ul>
    </div>
  )
}

export default Array
