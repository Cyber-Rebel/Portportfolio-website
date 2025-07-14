

  import{useEffect, useState} from 'react'
  import Home from './page/Home.jsx'
  import { SmileFilled } from '@ant-design/icons';
  import About from './page/About';
  import BoltLoader from './utils/BoltLoader.jsx'
  const App = () => {
    const [color,setcolor]=useState('transparent')
    const[hide,sethide]=useState('10')
    const [Load, SetLoad] = useState(true)
    useEffect(() => {
    window.addEventListener('scroll', function (e) {
      // console.log(e.isTrusted)
      
    });
 
    const timer= setTimeout(()=>{
      SetLoad(false)
    },50)
    return ()=> clearTimeout(timer) // clear time in funcation exapmle rember
   
  }, []);
  const handle=()=>{
    console.log('hello')
    setcolor('transparent')
     

  }
  const run  = ()=>{
    setcolor('#252525')
  }
   
if(Load){
return(
  
 <div className='w-full h-screen  flex-col flex justify-center items-center  bg-[#1A202C] '>
        {/* <BoltLoader
        className={"loaderbolt"} 
           boltColor={"#6366F1"}
         backgroundBlurColor={"#E0E7FF"}
       /> */}
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
       

  </div>

      </div>
    )
     }}

  export default App
 