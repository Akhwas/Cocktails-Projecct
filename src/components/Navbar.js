import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context'
import logo from '../logo.svg'

const Navbar = () => {
  const {fetchData} = useGlobalContext()
  return <nav className='navbar'>
    <div className='nav-center'>
      <NavLink to="/">

        <img src={logo} alt='cocktail db log' className='logo'></img>
      </NavLink>
      
      <ul className='nav-links'>
        <li>

          <NavLink to='/' onClick={fetchData} >Home</NavLink>
        </li>
        <li>

          <NavLink to='/about'>About</NavLink>
        </li>

      </ul>


    </div>
  </nav>
}

export default Navbar
