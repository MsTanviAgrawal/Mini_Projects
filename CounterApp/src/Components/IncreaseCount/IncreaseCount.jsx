import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './IncreaseCount.css'
import Back from '../back/back';

const IncreaseCount = () => {
  const [count, setCount]=useState(0);
  
    const handleCount=()=>{
      setCount((c)=>c+1);
      console.log(count);
    
    }
  
    return (
      <div className="increase-container">
        <div> <Back/> </div>

        <div className="increase">
        <h1 className="increase-heading" >Increase Count Component</h1>
        <h2 className="count">
         Count:  {count}
        </h2>
        <button className="count-btn" onClick={handleCount}>Increase Count</button>
        </div>
      </div>
    )
  }
  

export default IncreaseCount
