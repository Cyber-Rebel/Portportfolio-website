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
  const [rotate,setrotate] = useState(0)
  const textup = useRef(null);
  const sec1 = useRef(null);
  const sec2 = useRef(null);
  const sec3= useRef(null)
  const revTextRef = useRef(null);
  //Pura Element ka asscess milta hae querySleclect ek div ko sari infoamtiino
  useEffect(() => {
   document.querySelector("#idsx").addEventListener('mousemove',({clientX})=>{ 
      // console.log(clientX)
      const screenwidth= window.innerWidth; // screen ki width resize kare 
      const rotation= (( clientX/screenwidth) - 0.5) *-90 // 
      setrotate(rotation)

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
          trigger: revTextRef.current, // konsa eleme kena hae .class # id esa kuch hamesha rahta hae
          start: "top 90%", //
          end: "bottom 80%", //
          toggleActions: "play none none reverse", // toggle Action me some  keywordsa hote hae Play pause resume reverse restart complet none
          // toggle action 4 position hote hae use ham wo keyword use karte hae
          scrub: 1,
          // lovelye hae bhaii ye to
        },
      }
    );
    gsap.fromTo(
      sec1.current,
      {
        y: `${Math.random() * 100}px`,
        x: `${Math.random() * 100}px`,
        scale: 0.3, // 2px and scalte 2  value 4 px
        duration: 4,
        rotate: 205,
      },
      {
        y: 0,
        x: 0,
        scale: 1, // 2px and scalte 2  value 4 px
        duration: 1,
        rotate: 0,
      }
    );
    gsap.fromTo(
      sec2.current,
      {
        y: `-1000px`,
        x: `+100px`,
        scale: 5, // 2px and scalte 2  value 4 px
        duration: 3,
        rotate: 360,
      },
     
      {
        y: 0,
        x: 0,
        scale: 1, // 2px and scalte 2  value 4 px
        duration: 3,
        rotate:0
      }
    );
    return () => {
      // return ()=>{} return as obj sata kam kar sakt ho ek saath jadya kam karna
    };
  }, []);
     

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
          And
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
      <div  className="project-shon-casing">
        <div>
          <div  className="  flex gap-[25%]   pl-10">
            <LineLong position={"top"} />

            <LineLong position={"top"} />
            <LineLong position={"top"} />
            <LineLong position={"top"} />
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-500 border-2 border-blue-300 rounded-full"></div>

              <div className="w-px h-40 bg-gray-300"></div>
            </div>
          </div>
        </div>

        <div className="w-full flex   ">
          <PlusSquareFilled />
          <div  className={`bg-slate-600 w-full `}>
            {/* <div className='text-center'>Showcaing Work </div> */}
          </div>
        </div>

        <div id='idsx' className="flex gap-[35%]   pl-28">
          <div  style={{ transform: `rotate(${rotate}deg)`,  transformOrigin: 'top center',  }} ref={sec1}>
            <LineLong />
          </div>
          <div  style={{ transform: `rotate(${rotate}deg)`,  transformOrigin: 'top center',  }} ref={sec2} >
            <LineLong bg={"blue-500"}  />
          </div>
{/* <div ref={sec3}>

          <LineLong  bg={"red-600"} />
</div> */}

        </div>
      </div>

      <div></div>
    </div>
  );
};

export default About;

// 🔹 forwardRef React ka ek function hai jo aapko allow karta hai ref ko ek component ke andar pass karne ke liye — yani agar aap kisi custom component ko ref dena chahte ho, to uske liye forwardRef ka use karna padta hai.
