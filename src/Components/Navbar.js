import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"
import { BiSolidMoon } from "react-icons/bi";
import { BiSolidSun } from "react-icons/bi";


const Navbar = () => {
  const toggleswitch = document.querySelector(".toggleswitch")
  const handleclicked = () => {
    document.body.classList.toggle('switch')
  }

  return (
    <>
      <nav className='navbar'>
        <a href="/" className="logo">N<span className='pinkname'>G.</span> </a>
        <ul className='links'>
          <NavLink to="/" activeClassName='active' className='under'> <li className='lists'>Home</li></NavLink>
          <NavLink to="/education" activeClassName='active' className='under'><li>Education & Skills</li></NavLink>
          <NavLink to="/experience" activeClassName='active' className='under'><li>Experience & Achivements</li></NavLink>
          <NavLink to="/contact" activeClassName='active' className='under'><li>Contact</li></NavLink>
          <div onClick={handleclicked} className='toggleswitch'>
            <i className='fa fasun'><BiSolidSun /></i>
            <i className='fa famoon'><BiSolidMoon /></i>
          </div>
        </ul>

      </nav>
    </>
  )
}

export default Navbar