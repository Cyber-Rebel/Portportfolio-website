import React from 'react'
import './global.css'
import MainRoutes from './Routes/MainRoutes.jsx'
import Navabar from './components/Navabar.jsx'

const App = () => {
  return (
    <div className='Father_class overflow-x-hidden'>
<Navabar />

      <MainRoutes />
    </div>
  )
}

export default App
