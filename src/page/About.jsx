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
  const textup = useRef(null);
  
  const revTextRef = useRef(null);

  //Pura Element ka asscess milta hae querySleclect ek div ko sari infoamtiino
  const [val,setval] = useState(30)
  const [dir,setdir] = useState(true)
  useEffect(() => {

let tim = setInterval(()=>{
setval((prev)=>{
    if(prev>140){
      setdir(false)
      return 139
      
    }else if(prev<30){
      setdir(true)
      return 31 
    }
    // else{
     return  dir?prev+1:prev-1
})


  
},100)
    




    return () => {
      clearInterval(tim)
    };
  }, []);

  console.log(val)

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

    </div>
  );
};

export default About;
      

// 🔹 forwardRef React ka ek function hai jo aapko allow karta hai ref ko ek component ke andar pass karne ke liye — yani agar aap kisi custom component ko ref dena chahte ho, to uske liye forwardRef ka use karna padta hai.
// fist remove walring or gsap warking ko slove kiya or se wahi code paste karna wala hau dekte hae aab

    // gsap.fromTo(
    //   textup.current,
    //   {
    //     y: "-100%",
    //     opacity: 0,
    //   },
    //   {
    //     y: "0%",
    //     opacity: 1,
    //     duration: 8,
    //     ease: "cubic-bezier(0.65, 0, 0.35, 1)",
    //     scrollTrigger: {
    //       trigger: revTextRef.current,
    //       start: "top 98%",
    //       end: "bottom 60%",
    //       scrub: 1,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   revTextRef.current,
    //   {
    //     x: "-100%",
    //     opacity: 0.3,
    //   },
    //   {
    //     x: "0%",
    //     opacity: 1,
    //     duration: 8,
    //     ease: "cubic-bezier(0.65, 0, 0.35, 1)",
    //     scrollTrigger: {
    //       // jab bhi show hoga tab run hoga bydafult run nahi hoga  agar aapne scrollTrigner : '.c' (suppose classname) lik diya to  aapne ek mast kam hoga ki aap scrolle jab div show hoga tab run hoga
    //       trigger: revTextRef.current, // konsa eleme kena hae .className # id esa kuch hamesha rahta hae
    //       start: "top 90%", //
    //       end: "bottom 80%", //
    //       toggleActions: "play none none reverse", // toggle Action me some  keywordsa hote hae Play pause resume reverse restart complet none
    //       // toggle action 4 position hote hae use ham wo keyword use karte hae
    //       scrub: 1,
    //       // lovelye hae bhaii ye to
    //     },
    //   }
    // );