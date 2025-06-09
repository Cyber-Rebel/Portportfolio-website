
import { Route, Routes } from 'react-router-dom'
import Home from "../page/Home.jsx"
import About from '../ab/About.jsx'
import Resume from '../page/Resume.jsx'
import Works from "../page/Works.jsx"
import Contact from '../page/Contact.jsx'

const Maintainrouts = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
          <Route path='/works' element={<Works/>}/>
            <Route path='/contact' element={<Contact/>}/>
      
    </Routes>
  )
}

export default Maintainrouts;