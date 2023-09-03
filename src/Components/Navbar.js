import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href="/" className="logo">N<span>G.</span> </a>
      <ul className='links'>
        <NavLink to="/" activeClassName='active' className='under'> <li className='lists'>Home</li></NavLink>
        <NavLink to="/education" activeClassName='active' className='under'><li>Education & Skills</li></NavLink>
        <NavLink to="/experience" activeClassName='active' className='under'><li>Experience & Achivements</li></NavLink>
        <NavLink to="/contact" activeClassName='active' className='under'><li>Contact</li></NavLink>
      </ul>

    </nav>
  )
}

export default Navbar