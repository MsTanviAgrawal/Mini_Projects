import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Reset from '../../Components/Reset/ResetCount';
import './UniformCountOperation.css'

const UniformCountOperation = () => {
  const[count,setCount]=useState(0);
    
  return (
    <div className="uni-container">
      <Navbar/>

      <div className="uni-wrap" >
        <h1 className="unicount-heading" >Uniform Count Page</h1>
        <h2 className="count1" > Count: {count} </h2>

        <div className="buttons">
        <button className="count-btns" onClick={()=>setCount(count+1)} >Increase</button>
        <button className="count-btns" onClick={()=>setCount(count-1)}  >Decrease</button>
        <button className="count-btns" onClick={()=>setCount(0)}>Reset</button>
        </div>        
    
      </div>
    </div>
  )
}

export default UniformCountOperation
