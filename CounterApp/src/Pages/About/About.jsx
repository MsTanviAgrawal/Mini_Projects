import React from 'react'
import './About.css'
import Navbar from '../../Components/Navbar/Navbar'
import './About.css'

const About = () => {

    let data = [
    "This mini-project implements a simple Counter App using React. The Counter App is a small interactive tool that lets a user easily increment, decrement, or reset a numeric value.",

    "In this app, the current count value is displayed on the screen. User interaction is provided through intuitive buttons: one for increasing the count (“Increment”), one for decreasing it (“Decrement”), and optionally a “Reset” button to return the counter to its initial state. Internally, the app leverages React’s state management (e.g. useState) to keep track of the current count and update it in response to user actions.",

    "This simple but effective project demonstrates some core capabilities of React: managing component state, rendering UI based on state, and handling user-driven events. The Counter App is ideal for learning and practising the fundamentals of React, and serves as a building block for understanding more complex applications."
  ];

  return (
    <div className="about-container">
      <Navbar/>

      <div className="about-wrap">
        <h2 className="about-heading">ABOUT</h2>
        {data.map((para,index)=>(
          <p className="about-content" key={index}>{para} </p>
        ))}
        {/* <p className="about-content" >
        {data}
        </p> */}
      </div>

    </div>
  )
}

export default About
