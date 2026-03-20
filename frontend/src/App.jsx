import React from 'react'
import MainRoute from './routers/MainRouter'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainRoute/>
    </div>
  )
}

export default App