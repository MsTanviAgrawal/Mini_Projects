import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='nav-heading'>Counter App</h1>

      <div className='nav-container'>
        <ul className='nav-links'> 
          <li>
            <Link to="/"><button>Home</button></Link>
          </li>

          <li>
            <Link to="/independentOperation">
              <button>Independent Operation</button>
            </Link>
          </li>

          <li>
            <Link to="/uniformOperation">
              <button>Uniform Operation</button>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <button>About</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
