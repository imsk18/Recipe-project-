import React from 'react'
import MainRouter from './pages/routers/MainRouter'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainRouter/>
    </div>
  )
}

export default App