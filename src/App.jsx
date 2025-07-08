

  import{useEffect, useState} from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy }from 'react-scroll';

  import Home from './page/Home.jsx'
  import About from './page/About';
  import Resume from './page/Resume';
  import Work from './page/Works.jsx';
  import Contact from './page/Contact.jsx';
  const App = () => {
    const [color,setcolor]=useState('transparent')
    const[hide,sethide]=useState('10')
    useEffect(() => {
    window.addEventListener('scroll', function (e) {
      // console.log(e.isTrusted)
      
    });
    scrollSpy.update(); // Required for spy to work correctly
  }, []);
  const handle=()=>{
    console.log('hello')
    setcolor('transparent')
     

  }
  const run  = ()=>{
    setcolor('#252525')
  }
  console.log(hide)
   
      return (
          <div className='w-full relative'>
            <div>
        <div style={{backgroundColor:`${color}`,opacity:`${hide}`}} className={` fixed top-0 left-0 hidden z-30 md:flex text-white  w-full  h-fit py-3  bg-transparent justify-center items-center gap-10 `}>
 
  <Link to="Home"   className='font-opensans cursor-pointer text-2xl     font-bold '  spy={true}     activeClass="text-orange-700"   onSetActive={handle}    smooth={true} duration={500} > Home</Link>
  {/* // kabhi kabhi style or className me ek property same property activeClass mat dena jiske agar tumnedi pahle className ke propery chalgi */}
  {/* edar ek problem me classNAme text-white kar diya and activeClass text-oragne kar tu ese kya program sirf white color show ho raha ese li mene ek kam kiya ki className se text-wite propery nikali and parent ko de de acitveClass change nahi ki  */}
      <Link  to="about" className='font-opensans cursor-pointer font-bold text-xl' spy={true}    activeClass="text-orange-700"     onSetActive={run} offset={2} smooth={true} duration={500}     >ABOUT</Link>
      <Link  to="Resume" className=' font-opensans cursor-pointer font-bold text-xl' spy={true}    activeClass="text-orange-700"     smooth={true} duration={500}   >RESUME</Link>
      <Link to="works" className=' font-opensans cursor-pointer font-bold text-xl' spy={true}    activeClass="text-orange-700"    smooth={true} duration={500}     >WORKS</Link>
      <Link to="contact" className=' font-opensans  cursor-pointer font-bold text-xl' spy={true}    activeClass="text-orange-700"     smooth={true} duration={500}     >Contact</Link>
      </div>
        <Element name="Home">
          <Home/>
          </Element>
          <Element name="about">
        <About />
          </Element>
        <Element name="Resume">
        <Resume />
        </Element>
  <Element name="works">

        <Work />
  </Element>
  <Element name="contact">

          <Contact />

  </Element>
  </div>

      </div>
    )
  }

  export default App
  