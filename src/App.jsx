import React from 'react'
import './global.css'
import Home from './page/Home'
import About from './page/About'

const App = () => {
  return (
    <div className='Father_class overflow-x-hidden'>
      <Home/> 
      {/* <About/> */}
    </div>
  )
}

export default App