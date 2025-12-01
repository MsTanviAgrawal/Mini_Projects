import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './IndependentOperation.css'

const IndependentOperation = () => {
  const[count,setCount]=useState(0);
  const[count1,setCount1]=useState(0);

  const handleReset=(type)=>{
    if(type === "inc") setCount(0);
    if(type === "dec") setCount1(0);
    
  }

  return (
   <div className="ind-container">
      <Navbar/>
      
      <div className="ind-wrap">
        <h1 className="ind-heading">Independent Count Page</h1>

        <div className="ind-row-top">

          <div className="ind-section">
            <h2 className="indcount">Increase count: {count}</h2>
            <div className="inc-btn">
                <button className="ind-btn" onClick={()=>setCount(count+1)}>Increase</button>
                <button className="ind-btn" onClick={()=>handleReset("inc")}>Reset</button>
            </div>
          </div>

          <div className="ind-section1">
            <h2 className="indcount">Decrease count: {count1}</h2>
            <div className="dec-btn">
                <button className="ind-btn" onClick={()=>setCount1(count1-1)}>Decrease</button>
                <button className="ind-btn" onClick={()=>handleReset("dec")}>Reset</button>
            </div>
          </div>

        </div>

      </div>
</div>

  )
}

export default IndependentOperation
