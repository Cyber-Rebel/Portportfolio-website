import React from 'react'
import { Link, Element ,isACtive} from 'react-scroll';
import Home from '../page/Home.jsx'
import About from '../page/About';
import Resume from '../page/Resume';
import Work from '../page/Works.jsx';
import Contact from '../page/Contact.jsx';
const App = () => {
  return (
        <div className='w-full relative'>
       <div className=' fixed top-0 left-0 hidden  z-30 md:flex w-full h-fit  mt-9 justify-center items-center gap-10 '>

<Link className='font-opensans cursor-pointer h hover:text-orange-700 text-white    font-bold text-xl' smooth={true} duration={900}     to="Home"> Home</Link>
    <Link className='font-opensans cursor-pointer hover:text-orange-700 text-white  font-bold text-xl' smooth={true} duration={900}    to="about"  >ABOUT</Link>
    <Link className=' font-opensans cursor-pointer hover:text-orange-700 text-white  font-bold text-xl' smooth={true} duration={900}   to="Resume"   >RESUME</Link>
    <Link className=' font-opensans cursor-pointer hover:text-orange-700 text-white  font-bold text-xl' smooth={true} duration={900}   to="works"  >WORKS</Link>
    <Link className=' font-opensans cursor-pointer hover:text-orange-700 text-white  font-bold text-xl' smooth={true} duration={900}   to='contact'  >Contact</Link>
    </div>
      <Element name='Home'>
        <Home/>
        </Element>
        <Element name='about'>
      <About />
        </Element>
      <Element name='Resume'>
       <Resume />
      </Element>
<Element name='works'>

       <Work />
</Element>
<Element name='contact'>

        <Contact />

</Element>

    </div>
  )
}

export default App