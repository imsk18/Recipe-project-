import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='navbar'>
        <NavLink to={'/'}>home</NavLink>
        <NavLink to={'/recipes'}>recipes</NavLink>
        <NavLink to={'/about'}>about</NavLink>
        <NavLink to={'/create-recipe'}>create-recipe</NavLink>
    </div>
  )
}

export default Navbar