

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
    setcolor('#444444')
  }
  console.log(hide)
   
      return (
          <div className='w-full relative'>
            <div>
        <div style={{backgroundColor:`${color}`,opacity:`${hide}`}} className={` fixed top-0 left-0 hidden   z-30 md:flex text-white  w-full  h-fit py-6 bg-transparent justify-center items-center gap-10 `}>
 
  <Link to="Home"   className='font-opensans cursor-pointer text-2xl     font-bold '  spy={true}     activeClass="text-orange-700"   onSetActive={handle}    smooth={true} duration={500} > Home</Link>
  {/* // kabhi kabhi style or className me ek property same property activeClass mat dena jiske agar tumnedi pahle className ke propery chalgi */}
  {/* edar ek problem me classNAme text-white kar diya and activeClass text-oragne kar tu ese kya program sirf white color show ho raha ese li mene ek kam kiya ki className se text-wite propery nikali and parent ko de de acitveClass change nahi ki  */}
      <Link  to="about" className='font-opensans cursor-pointer font-bold text-xl' spy={true}    activeClass="text-orange-700"     onSetActive={run} offset={2} smooth={true} duration={500}     >ABOUT</Link>
      <Link  to="Resume" className=' font-opensans cursor-pointer font-bold text-xl' spy={true}    activeClass="text-orange-700"     smooth={true} duration={500}   >RESUME</Link>
      <Link to="works" className=' font-opensans cursor-pointer font-bold text-xl' spy={true}    activeClass="text-orange-700"    smooth={true} duration={500}     >WORKS</Link>
      <Link to="contact" className=' font-opensans cursor-pointer font-bold text-xl' spy={true}    activeClass="text-orange-700"     smooth={true} duration={500}     >Contact</Link>
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
// const lenisRef = useRef()
// Bilkul bhai! Ab tu sun — spy ka kaam react-scroll mein section ka tracking karna hota hai. Ye automatically detect karta hai ki abhi kaunsa section screen pe dikh raha hai, aur fir uss hisaab se link ko active bana deta hai.
  
  // useEffect(() => {
  //   function update(time) {
  //     lenisRef.current?.lenis?.raf(time)
  //   }
  
  //   const rafId = requestAnimationFrame(update)
  
  //   return () => cancelAnimationFrame(rafId)
  // }, [])

// import React, { useState } from 'react'

// const App = () => {
//   const [konsclick, setkonclick] = useState('LUN')  

//   const getColor = (label) => (konsclick === label ? 'green' : 'white')

//   return (
//     <div className='flex gap-6 text-white'>  
//       <button
//         onClick={() => setkonclick('LUN')}
//         style={{ color: getColor('LUN') }}
//         className='bg-slate-800 px-4 py-2 rounded'
//       >
//         Lun
//       </button>

//       <button
//         onClick={() => setkonclick('suc')}
//         style={{ color: getColor('suc') }}
//         className='bg-slate-800 px-4 py-2 rounded'
//       >
//         Suc
//       </button>

//       <button
//         onClick={() => setkonclick('fuc')}
//         style={{ color: getColor('fuc') }}
//         className='bg-slate-800 px-4 py-2 rounded'
//       >
//         Fuc
//       </button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react';
// import { Link, Element,Events ,scrollSpy } from 'react-scroll';

// function App() {
//   const [color,setcolor] = useState('')
  
// useEffect(() => {
    
//     Events.scrollEvent.register('begin', (to, element) => { // ye work hota hae jab secition ek link jab aap button ko press karte ho
//       // console.log('begin', to, element);
//     });

//     Events.scrollEvent.register('end', (to, element) => {
//       // console.log('end', to, element);
//     });
 
//     scrollSpy.update();    // scroller par spy karta hae spy imfromatin hota scroller me 

//     return () => {
//       Events.scrollEvent.remove('begin');
//       Events.scrollEvent.remove('end');
//     };
//   }, []);
  
//   const handleSetActive=(to)=>{
//     console.log(to)
//     if(to==='section1'){
//       setcolor('red-900')
//     }else
//      if(to==='section2'){
//       setcolor('blue-500')
//     }
    
//   }
//   // console.log(color)
//   return (
//     <div>
//       <nav >
//         <ul className={`flex w-full items-center justify-center bg-${color}  fixed gap-2.5 `}>
//           <li>
//             <Link to="section1" smooth={true} duration={500}  spy={true}    activeClass={`text-orange-700`}   onSetActive={handleSetActive} >Section 1</Link>
//           </li>
//           <li>
//             <Link to="section2" smooth={true} duration={500} spy={true}    activeClass={`text-orange-700`}   onSetActive={handleSetActive} >Section 2</Link>
//           </li>
//            <li>
//             <Link to="section3" smooth={true} duration={500}  spy={true}   activeClass={`text-orange-900`}   onSetActive={handleSetActive} >Section 3</Link>
//           </li>
//            <li>
//             <Link to="section4" smooth={true} duration={500} spy={true}    activeClass={`text-orange-900`}   onSetActive={handleSetActive} >Section 4</Link> 
//           </li>
//           {/*spy={true } tabi activeclass onsetActive work hota hae  Activeclass me app css likte ho  onsetActive apko ek value to postion jab page scroller pto ha e 
// //offset control karta hai kitna upar ya neeche scroll karega jab koi section pe scroll ho raha ho.
// // ✅ offset={-70} Kaam Kaise Karta Hai?  */}
//         </ul>
//       </nav>
//       <Element name="section1">
//         <section style={{ height: '100vh', backgroundColor: 'lightblue' }}>
//           <h1>Section 1</h1>
//           <p>This is the content of section 1</p>
//         </section>
//       </Element>
//       <Element name="section2">
//         <section style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
//           <h1>Section 2</h1>
//           <p>This is the content of section 2</p>
//         </section>
//       </Element>
//         <Element name="section3">
//         <section style={{ height: '100vh', backgroundColor: 'red' }}>
//           <h1>Section 3</h1>
//           <p>This is the content of section 3</p>
//         </section>
//       </Element> 
//        <Element name="section4">
//         <section style={{ height: '100vh', backgroundColor: 'yellow' }}>
//           <h1>Section 4</h1>
//           <p>This is the content of section 4</p>
//         </section>
//       </Element>
//       {/* Add more sections with Element components as needed */}
//     </div>
//   );
// }

// export default App; 