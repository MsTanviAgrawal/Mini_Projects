import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';

const Reset = () => {
  const [count,setCount]=useState(0);

  return (
    <div>
      {/* <Navbar/> */}
      <button onClick={()=>setCount(count)}>Reset</button>
    </div>
  )
}

export default Reset
