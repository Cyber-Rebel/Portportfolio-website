

  import{useEffect, useState} from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy }from 'react-scroll';
  import Home from './page/Home.jsx'
  import { SmileFilled } from '@ant-design/icons';
  import About from './page/About';
  import Resume from './page/Resume';
  import Work from './page/Works.jsx';
  import BoltLoader from './utils/BoltLoader.jsx'
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
<div className="fixed top-0 left-0 w-full py-4 px-6 z-50 bg-black/30 backdrop-blur-xl text-white hidden md:flex justify-between items-center">
  <div className="text-xl font-bold tracking-wide pl-3">Nilesh Patil
    <SmileFilled  className=' ml-3  text-[#1677FF]'/>
  </div>
  <div className="flex gap-8 text-sm font-medium tracking-wide">
    <button className="hover:text-indigo-400 transition">ABOUT</button>
    <button className="hover:text-indigo-400 transition">RESUME</button>
    <button className="hover:text-indigo-400 transition">WORKS</button>
    <button className="hover:text-indigo-400 transition">CONTACT</button>
  </div>
</div>

          <Home/>
        <About />
        {/* <Resume />
        <Work />
          <Contact /> */}

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