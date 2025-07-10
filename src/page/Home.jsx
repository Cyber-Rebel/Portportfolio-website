import { useEffect, useState } from 'react';
import image from '../asset/image.png';
import glow from '../asset/glow.png';
import { motion, resize } from "motion/react"
import { SocialIcon } from 'react-social-icons'
const Home = () => {

  const [show,setshow] = useState(glow)
  useEffect(() => {
    
    window.addEventListener('resize',()=>{ // on resize var chalt rahil
       console.log(window.innerWidth===1311) // calclutate size of screen
       if(window.innerWidth <=1311){ //<=
        setshow(false)
       }
    })

    // ✅ Corrected: clearTimeout instead of clearInterval animated matlab final
    // video chya dikani apn loading animatin app.jsx madhe
    
  }, []);

 
    return (
       <div className="w-full h-screen ">
      <div className="w-full h-[92%] bg-[#090A0B] flex flex-col md:flex-row items-center  justify-between px-6 md:px-40 py-20 md:py-40 overflow-x-hidden">
        <div
      
          className="relative h-full w-[80%] flex bg-[#090A0B] items-center z-10 pr-[5%] rounded-xl justify-end"
          style={{
            backgroundImage: `url(${show?`${glow}`:""})`,
            backgroundPosition: "center",
             backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
       initial={{ opacity: 0,  }}  
  animate={{ opacity: 1, y: -30 }}
  transition={{delay:0.3}}
    >
            <p className="text-green-400">Hi there, I’m</p>
            <h1 className="text-5xl text-white font-bold">Nilesh Ramlal Patil</h1>
            <h2 className="text-2xl font-light text-white">Developer + Designer</h2>
            <p className="text-gray-400 mt-4">
              I’m a full-stack engineer with experience in design and development of user-centered web and mobile applications. <br />
              I am also focusing on mastering UI/UX design. Currently, I’m working on building cloud solutions at <span className="text-green-400">Lorem</span>.
            </p>
          </motion.div>
        </div>

    <motion.dev 
    
    
    >

        <img
          className="w-full h-auto object-center"
          src={image}
          alt="Illustration"
        />
    </motion.dev>
    </div>
    
<hr />
    <div className='w-full bg-[#090A0B] h-[10%]   items-center flex gap-10  justify-end pr-10 '>
    <SocialIcon  url='https://www.instagram.com/nilesh_patil_954/' />
    <SocialIcon url='https://www.linkedin.com/in/nilesh-patil-451637322/' />
    <SocialIcon url='https://github.com/Cyber-Rebel'/>
    <SocialIcon url='https://discord.com/channels/1342784087856910377/1342784087856910380' />
    </div>
      </div>
    
    );
  }

export default Home;

// inital -fix-final