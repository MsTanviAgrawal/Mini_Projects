import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Link to="/increase">
          <button className="btn" >Increase</button>
        </Link>

        <Link to="/decreases">
          <button className="btn" >Decrease</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
