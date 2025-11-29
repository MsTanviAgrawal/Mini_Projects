import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';

const Reset = () => {
  const [count,setCount]=useState(0);

  const handleCount=()=>{
    setCount(count);
  }
  return (
    <div>
      <Navbar/>
      <h1>Reset Count Component</h1>
      <h2>{count}</h2>
      <button onClick={handleCount}>Reset</button>
    </div>
  )
}

export default Reset
