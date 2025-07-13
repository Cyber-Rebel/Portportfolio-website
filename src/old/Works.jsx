import React, { useRef, useState } from 'react';
import image from './image.png';
import Linux from '../asset/Linux.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { disableInstantTransitions } from 'framer-motion';
const Works = () => {
  // const [Ram,setRAm] = useState(Swiper)
  const SwiperSlideRef= useRef(null) // staring a lost of time useRef ki value null hoti hae ]]]]]]]]
  

  return (
    <div
      onMouseEnter={()=>{ SwiperSlideRef.current?.autoplay?.stop()}}
      onMouseLeave={()=>{ SwiperSlideRef.current?.autoplay?.start()}}>
    <Swiper

    modules={[Autoplay,Navigation,Pagination]} //"Swiper ke modules ka data extract karna hai,

    pagination={{clickable:3000,disableOnInteraction:false}}// disableOnInteraction: false

    loop={true}
    
    autoplay={{delay:300}}
// onAutoplayPause={}
    spaceBetween={300}

    navigation
     onSwiper={(swiper) => {
           SwiperSlideRef.current = swiper;
        }}
    onSlideChange={() => console.log('Slide changed')}
        onClick={()=>setRAm("Div")}
    className="w bg-gray-950 text-white flex items-center justify-center ">
      <SwiperSlide

      className="flex w-full h-screen flex-col lg:flex-row  gap-12   bg-gray-900  overflow-hidden p-2 lg:p-12 items-center ">
        <div className='flex gap-12' >
        <div className="lg:w-1/2 w-full ">
          <img
            src={image}
            alt="Project"
            className="w-full h-[350px] lg:h-[450px] rounded-xl object-cover shadow-md hover:scale-105 transition duration-300"
          />

          <h1 className="text-4xl ml-10 p-10 text-center font-bold mt-6 text-purple-400">
            GitHub Profile Search
          </h1>
        </div>

        {/* Project Content */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className="text-3xl font-semibold mb-3 text-white">Description</h2>
          <p className="text-gray-300 mb-6 text-base leading-relaxed max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700">
            This app allows users to search GitHub profiles and see data like repositories, followers, and bio. Built with React, Tailwind, and GitHub API. Responsive design and error handling included. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloribus sapiente eaque reprehenderit inventore, blanditiis quasi aperiam. Similique dolores repellat eos, est nobis nulla in debitis unde fuga ipsa doloremque.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-lg transition text-sm"
            >
              GitHub
            </a>
            <a
              href="https://live-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-lg transition text-sm"
            >
              Live Link
            </a>
            <a
              href="https://notion.so/project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-600 px-6 py-2 rounded-lg transition text-sm"
            >
              Notion
            </a>
          </div>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
       
      className="flex w-full h-screen flex-col lg:flex-row  gap-12   bg-gray-900  overflow-hidden p-2 lg:p-12 items-center ">
        <div className='flex gap-12' >
        <div className="lg:w-1/2 w-full ">
          <img
            src={Linux}
            alt="Project"
            className="w-full h-[350px] lg:h-[450px] rounded-xl object-cover shadow-md hover:scale-105 transition duration-300"
          />

          <h1 className="text-4xl ml-10 p-10 text-center font-bold mt-6 text-purple-400">
          Linux Os Brower Simplutaion
          </h1>
        </div>

        {/* Project Content */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className="text-3xl font-semibold mb-3 text-white">Description</h2>
          <p className="text-gray-300 mb-6 text-base leading-relaxed max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700">
            This app allows users to search GitHub profiles and see data like repositories, followers, and bio. Built with React, Tailwind, and GitHub API. Responsive design and error handling included. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloribus sapiente eaque reprehenderit inventore, blanditiis quasi aperiam. Similique dolores repellat eos, est nobis nulla in debitis unde fuga ipsa doloremque.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-lg transition text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linux-os.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-600 px-6 py-2 rounded-lg transition text-sm"
            >
              Live Link
            </a>
            <a
              href="https://notion.so/project"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 hover:bg-green-600 px-6 py-2 rounded-lg transition text-sm"
            >
              Notion
            </a>
          </div>
        </div>
        </div>
      </SwiperSlide>

      </Swiper>
      </div>

  );
};

export default Works;
// useRef se swiper instance pakad ke rakha gaya hai.

// onMouseEnter par autoplay stop ho jata hai.

// onMouseLeave par fir se autoplay chalu ho jata hai.

// disableOnInteraction: false likhna zaroori hai warna stop ke baad resume nahi karega.

// //  <div className="w-full bg-[#eee8df] py-10 px-4">
//   <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-8">
//     Check Out Some of My Works
//   </h2>

//   <div className="w-full flex flex-wrap justify-center gap-6">
    
//     <div className="bg-white shadow-2xl hover:shadow-xl transition-shadow duration-300  w-80">
//       <a href="https://github-profile-search-ruby.vercel.app/" target="_blank" rel="noopener noreferrer">
//         <img src={image} alt="GitHub Profile Search" className=" h-48 w-full" />
//         <div className="p-4 text-center text-lg font-medium text-gray-800">
//           GitHub Profile Search
//         </div>
//       </a>
//     </div>

//     <div className="bg-white shadow-2xl hover:shadow-xl transition-shadow duration-300  w-80">
//       <a href="https://linux-os.vercel.app/" target="_blank" rel="noopener noreferrer">
//         <img src={Linux} alt="Linux OS Interface" className="w-full h-48 object-cover" />
//         <div className="p-4 text-center text-lg font-medium text-gray-800">
//           Linux OS Interface
//         </div>
//       </a>
//     </div>
//   </div>
// </div>