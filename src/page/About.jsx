import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlusSquareFilled } from "@ant-design/icons";
import LineLong from "../components/LineLong";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textcss = {
    fontFamily: "sans-serif",
    fontStyle: "italic",
  };
  const moves = useRef(null)
const textup = useRef(null);
const revTextRef = useRef(null);
  //Pura Element ka asscess milta hae querySleclect ek div ko sari infoamtiino

const [moveleftleg,setmoveleftleg] = useState({
  val:30,
  dir:true
})
const [moverightleg ,setmoverightleg]= useState({
  val:140,
  dir:true
})

  useEffect(() => {
   let timer= setInterval(() => {
      setmoveleftleg((prev)=>{
        let newvalue= prev.dir ? prev.val+1 : prev.val-1
        let newdirection = prev.dir

        if(newvalue==30){
          newdirection=true;
        }else if(newvalue===140){
          newdirection=false;
        }
          return{
            val:newvalue,
            dir:newdirection
          }

      })

      setmoverightleg((prev)=>{
        let newvalue = prev.dir ? prev.val-1:prev.val+1
        let newdirection= prev.dir;
        
        if(newvalue==30){
            newdirection=false
        }else if(newvalue==140){
          newdirection=true
        }
        return {
          val:newvalue,
          dir:newdirection
        }



      })
      
    }, 10);
    

    gsap.fromTo(moves.current,{

      x:'-20%',
      duration:40,
      scale:0.7

    },{
       x:'100%',
      duration:40,
      scale:0.3
    })



    
    gsap.fromTo(
      textup.current,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 8,
        ease: "cubic-bezier(0.65, 0, 0.35, 1)",
        scrollTrigger: {
          trigger: revTextRef.current,
          start: "top 98%",
          end: "bottom 60%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      revTextRef.current,
      {
        x: "-100%",
        opacity: 0.3,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 8,
        ease: "cubic-bezier(0.65, 0, 0.35, 1)",
        scrollTrigger: {
          // jab bhi show hoga tab run hoga bydafult run nahi hoga  agar aapne scrollTrigner : '.c' (suppose classname) lik diya to  aapne ek mast kam hoga ki aap scrolle jab div show hoga tab run hoga
          trigger: revTextRef.current, // konsa eleme kena hae .className # id esa kuch hamesha rahta hae
          start: "top 90%", //
          end: "bottom 80%", //
          toggleActions: "play none none reverse", // toggle Action me some  keywordsa hote hae Play pause resume reverse restart complet none
          // toggle action 4 position hote hae use ham wo keyword use karte hae
          scrub: 1,
          // lovelye hae bhaii ye to
        },
      }
    );
  
    return () => {
      clearInterval(timer)
    };


  }, []);
    //  console.log(moveleftleg.val)
    //  console.log(moverightleg.val)

  return (
    <div className="bg-[#1E2125]  h-100vh pt-[6%] pb-24 text-white min-h-screen px-4 sm:px-8">
      <div>
        <div
          ref={textup}
          style={textcss}
          id="uppertext"
          className="uppertext text-[#E9DFCE] ml-6  text-center sm:text-left text-[clamp(2.5rem,12vw,8rem)] font-bold leading-tight"
        >
          I Can Debug Code
        </div>

        <p
          style={textcss}
          className="text-[#E9DFCE] text-center text-[clamp(1.5rem,5vw,3rem)] my-6"
        >
` And `
        </p>

        <div
          ref={revTextRef}
          style={textcss}
          className="text-[#E9DFCE]  text-center font-[Grandslang,sans-serif] text-[clamp(2.5rem,12vw,8rem)] font-bold md:text-end"
        >
          Build Cool Things.
        </div>
      </div>
      <div className="mt-36"></div>
      {/* Project Show Casing */}
  <div ref={moves} className="w-full ">
    
<svg viewBox="0 0 200 300" className="w-64 h-auto">
  {/* Head */}
  <circle cx="100" cy="40" r="30"  strokeWidth="5"  className="stroke-blue-400 fill-transparent " />

  {/* Eyes */}


  {/* Nose */}
  {/* <line x1="100" y1="38" x2="100" y2="45" className="stroke-blue-400 stroke-[2]" /> */}

  {/* Smile */}

  {/* Body */}
  <line x1="100" y1="70" x2="100" y2="150" strokeWidth="7" className="stroke-blue-400 " />

  {/* Left Arm */}
  <line x1="100" y1="90" x2={moveleftleg.val+10} y2="120" strokeWidth="7" className="stroke-blue-400 " />

  {/* Right Arm (bent) */}
  <line x1="100" y1="90" x2={moverightleg.val+10}y2="126" strokeWidth="7" className="stroke-blue-400 " />

  {/* Left Leg */}
  <line x1="100" y1="150" x2={moverightleg.val} y2="220" strokeWidth="7" className="stroke-blue-400 " />

  {/* Right Leg */}
  <line x1="100" y1="150" x2={moveleftleg.val} y2="220"  strokeWidth="7" className="stroke-blue-400 " />
</svg>

  </div>



      
    </div>
  );
};

export default About;
// setinterval is not good way instan we can applay gsap
// 🔹 forwardRef React ka ek function hai jo aapko allow karta hai ref ko ek component ke andar pass karne ke liye — yani agar aap kisi custom component ko ref dena chahte ho, to uske liye forwardRef ka use karna padta hai.
// hand move in gsap in useEfect and repet

// bhaii aaj apata chala svg ko gsap se kam kart hae youtube sheriyan ke video muje timeline sikna but dek hae 