import { useEffect, useState } from 'react';
import image from '../asset/image.png';
import glow from '../asset/glow.png';
import bg from '../asset/bg.mp4';

const Home = () => {
  const [video, showVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      showVideo(false);
    }, 2000);

    // ✅ Corrected: clearTimeout instead of clearInterval
    return () => clearTimeout(timer);
  }, []);

  if (video) {
    return (
      <div className="w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={bg}
          autoPlay
          muted
          playsInline
        />
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen bg-[#090A0B] flex flex-col md:flex-row items-center gap-11 justify-between px-6 md:px-40 py-20 md:py-40 overflow-hidden">
      
        <div
          className="relative h-full w-[80%] flex bg-[#090A0B] items-center z-10 p-6 rounded-xl justify-end"
          style={{
            backgroundImage: `url(${glow})`,
            backgroundPosition: "center",
             backgroundRepeat: "no-repeat"
          }}
        >
          <div>
            <p className="text-green-400">Hi there, I’m</p>
            <h1 className="text-5xl text-white font-bold">Nilesh Ramlal Patil</h1>
            <h2 className="text-2xl font-light text-white">Developer + Designer</h2>
            <p className="text-gray-400 mt-4">
              I’m a full-stack engineer with experience in design and development of user-centered web and mobile applications. <br />
              I am also focusing on mastering UI/UX design. Currently, I’m working on building cloud solutions at <span className="text-green-400">Lorem</span>.
            </p>
          </div>
        </div>

    
        <img
          className="w-full md:w-[40%] h-auto object-center"
          src={image}
          alt="Illustration"
        />
      </div>
    );
  }
};

export default Home;


   
    // <video style={{width:"100%" ,height:"90%"
    //      }}  autoPlay  muted > bg-[#090A0B

    //   <source  src={video} type="video/mp4"></source>



    // </video>

          // <div className=" w-full h-screen bg-[#090A0B] flex flex-col  md:flex-row items-center justify-between gap-[20%]">
        
        
            // <img  className='' src={glow} alt="The glow image here" />

     
          // <img src={image} alt="Keyboard" className="w-full " />

          
//               <div className="w-full h-screen bg-[#090A0B] flex flex-col md:flex-row items-center justify-between px-6 md:px-40 py-20 md:py-40 overflow-hidden">
      
//      <div
//   className="relative h-full w-[80%] flex bg-[#090A0B]  items-center z-10 p-6 rounded-xl justify-end"
//   style={{
//     backgroundImage: `url(${glow})`,
//     backgroundPosition: "center",
//     // backgroundSize: "cover",
//     // backgroundRepeat: "no-repeat"
//   }}
// >
//   <div>
//     <p className="text-green-400">Hi there, I’m</p>
//     <h1 className="text-5xl text-white font-bold">Nilesh Ramlal Patil</h1>
//     <h2 className="text-2xl font-light text-white">Developer + Designer</h2>
//     <p className="text-gray-400  mt-4">
//       I’m a full-stack engineer with experience in design and development of user-centered web and mobile applications. <br />
//       I am also focusing on mastering UI/UX design. Currently, I’m working on building cloud solutions at <span className="text-green-400">Lorem</span>.
//     </p>
//   </div>
// </div>


//       <img className="w-full md:w-[40%] h-auto object-center" src={image} alt="A keyboard on a dark background" />
//     </div>