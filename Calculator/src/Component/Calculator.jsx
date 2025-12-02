import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const[input,setInput]=useState("");

    const handleClick=(value)=>{
        setInput(input+value);
    }

    const handleClear=()=>{
        setInput("");
    }

    const handleBackspace = () => {
    setInput(input.slice(0, -1));
    };

  const handlePercentage = () => {
    if (input) {
      const result = parseFloat(input) / 100;
      setInput(result.toString());
    }
    };


    const handleEqual=()=>{
        try{
            const result=eval(input);
            setInput(result.toString());
        }catch{
            setInput("Error");
        }
    };

  return (
    <div className="calc-container">
    <div className='calc-wrap-heading'><h1 className='calc-heading' >Calculator</h1></div>
      <div className="display">{input || "0"}</div>

      <div className="buttons">

        <button onClick={handleClear} className="btn gray">C</button>
        <button onClick={handlePercentage} className="btn gray">%</button>
        <button onClick={handleBackspace} className="btn gray">⌫</button>
        <button onClick={() => handleClick("/")} className="btn teal">÷</button>

        <button onClick={() => handleClick("7")} className="btn">7</button>
        <button onClick={() => handleClick("8")} className="btn">8</button>
        <button onClick={() => handleClick("9")} className="btn">9</button>
        <button onClick={() => handleClick("*")} className="btn teal">×</button>

        <button onClick={() => handleClick("4")} className="btn">4</button>
        <button onClick={() => handleClick("5")} className="btn">5</button>
        <button onClick={() => handleClick("6")} className="btn">6</button>
        <button onClick={() => handleClick("-")} className="btn teal">−</button>

        <button onClick={() => handleClick("1")} className="btn">1</button>
        <button onClick={() => handleClick("2")} className="btn">2</button>
        <button onClick={() => handleClick("3")} className="btn">3</button>
        <button onClick={() => handleClick("+")} className="btn teal">+</button>

        <button onClick={() => handleClick("00")} className="btn">00</button>
        <button onClick={() => handleClick("0")} className="btn">0</button>
        <button onClick={() => handleClick(".")} className="btn">.</button>
        <button onClick={handleEqual} className="btn teal">=</button>

      </div>
    </div>
  )
}

export default Calculator
