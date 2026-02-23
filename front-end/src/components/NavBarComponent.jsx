import React from 'react'
import { Link } from 'react-router-dom';
const NavBarComponent = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">My App</div>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarComponent