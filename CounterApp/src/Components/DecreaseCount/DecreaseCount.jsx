import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import {Link} from 'react-router-dom'
import Back from '../back/back';
import './DecreaseCount.css'

const DecreaseCount = () => {
  const [count, setCount]=useState(0);

  const handleCount=()=>{
    setCount((c)=>c-1);
    console.log(count);
  
  }

  return (
    <div className="decrease-container">
      <div > <Back/> </div>
      
      <div className="decrease">
        <h1 className="decrease-heading" >Decrease Count Component</h1>
      <h2 className="count1 ">
       Count: {count}
      </h2>
      <button className="count-btn1" onClick={handleCount}>Decrease Count</button>
      </div>

    </div>
  )
}

export default DecreaseCount
