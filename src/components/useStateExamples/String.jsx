import React, { useState } from 'react'

function String() {
    const[name, setName]=useState("");

    const handleNameChange=(event)=>{
        setName(event.target.value);
    };
  return (
    <div>
        <input
        type='text'
        value={name}
        placeholder='Enter your name'
        onChange={handleNameChange}
        />
        <p>Hello {name}! </p>
    </div>
  )
}

export default String
