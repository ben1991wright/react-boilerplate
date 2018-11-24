import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return(
    <nav className="nav-bar">
      <NavLink exact to='/' activeClassName="current">
        <div className="nav-bar-link">
          <p>Home</p>
        </div>
      </NavLink>
      <NavLink exact to='/about' activeClassName="current">
        <div className="nav-bar-link">
          <p>About</p>
        </div>
      </NavLink>
      <NavLink exact to='/contact' activeClassName="current">
        <div className="nav-bar-link">
          <p>Contact</p>
        </div>
      </NavLink>
    </nav>
  )
}

export { NavBar }
