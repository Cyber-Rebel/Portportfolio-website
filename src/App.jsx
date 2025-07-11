

  import{useEffect, useState} from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy }from 'react-scroll';
import { BoltLoader } from "react-awesome-loaders"
  import Home from './page/Home.jsx'
  import About from './page/About';
  import Resume from './page/Resume';
  import Work from './page/Works.jsx';
  import Contact from './page/Contact.jsx';
  const App = () => {
    const [color,setcolor]=useState('transparent')
    const[hide,sethide]=useState('10')
    const [Load, SetLoad] = useState(true)
    useEffect(() => {
    window.addEventListener('scroll', function (e) {
      // console.log(e.isTrusted)
      
    });
    scrollSpy.update(); // Required for spy to work correctly style={{backgroundColor:`${color}`,opacity:`${hide}`}} backdrop-blur-xl -- blur the background

    const timer= setTimeout(()=>{
      SetLoad(false)
    },5000)
    return ()=> clearTimeout(timer) // clear time in funcation exapmle rember
   
  }, []);
  const handle=()=>{
    console.log('hello')
    setcolor('transparent')
     

  }
  const run  = ()=>{
    setcolor('#252525')
  }
  console.log(hide)
   
if(Load){
return(
  
 <div className='w-full h-screen  flex-col flex justify-center items-center  bg-[#1A202C] '>
        <BoltLoader
         className={"loaderbolt"} 
          boltColor={"#6366F1"}
          backgroundBlurColor={"#E0E7FF"}
       />
     </div> 


)


}

     else{ return (
          <div className='w-full relative'>
            <div>
 <div className="fixed top-0 left-0 z-30 hidden w-full py-3 md:flex items-center justify-center gap-10 text-white bg-transparent backdrop-blur-xl h-fit">

  <Link to="Home"   className='font-opensans cursor-pointer text-2xl     font-bold '  spy={true}     activeClass="text-orange-600"   onSetActive={handle}    smooth={true} duration={500} > Home</Link>
  {/* // kabhi kabhi style or className me ek property same property activeClass mat dena jiske agar tumnedi pahle className ke propery chalgi */}
  {/* edar ek problem me classNAme text-white kar diya and activeClass text-oragne kar tu ese kya program sirf white color show ho raha ese li mene ek kam kiya ki className se text-wite propery nikali and parent ko de de acitveClass change nahi ki  */}
      <Link  to="about" className='font-opensans cursor-pointer font-bold text-xl' spy={true}    activeClass="text-orange-600"     onSetActive={run} offset={2} smooth={true} duration={500}     >ABOUT</Link>
      <Link  to="Resume" className=' font-opensans cursor-pointer font-bold text-xl' spy={true}    activeClass="text-orange-600"     smooth={true} duration={500}   >RESUME</Link>
      <Link to="works" className=' font-opensans cursor-pointer font-bold text-xl' spy={true}    activeClass="text-orange-600"    smooth={true} duration={500}     >WORKS</Link>
      <Link to="contact" className=' font-opensans  cursor-pointer font-bold text-xl' spy={true}    activeClass="text-orange-600"     smooth={true} duration={500}     >Contact</Link>
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
     }}

  export default App
  // c6ecebbclassName={"loaderbolt"} 


  // --------------------
  // uderstand a problem ek package hae jo hame loader provide karta hae but problem hae ki wo mer statye hone nahi hora tha only showning waring to mer kya kiya
  // part -1 
  // ese pacagek github kiya use file copy and use npm i package install kiya use wo huva but problem ab wo proper use nahi hora tah jo code tha 
  // or me ke devlper jo har nai manta to mane soch ki chatgpt puse use mer gand mar di 
  // 

  // to mene soch ki ye libarry or packge 4 old hae to node version piche kiya chaiye to node version 14 donwolasd kiya ko ki workable nahi tha 
  // read the rember.text

  // fir bhi koi issuene to aarra hae to kyu react-rourter-dom ke package node ka version 20 + chaiye tah t or mere 18 kiya to 
  // but 