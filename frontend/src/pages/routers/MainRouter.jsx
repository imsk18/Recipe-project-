import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../Home'
import Recipes from '../Recipes'
import About from '../About'

const MainRouter = () => {
  return <Routes>
   <Route path='/' element = {<Home/>}/>
    <Route path = '/recipes' element= {<Recipes/>}/>
    <Route path = '/about' element= {<About/>}/>
  </Routes>
}

export default MainRouter