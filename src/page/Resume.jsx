import React, { useState } from 'react'


const Resume = () => {

const arr = [
  {
    name: 'HTML & CSS',
    image: 'https://css-tricks.com/wp-content/uploads/2021/05/dear-html-css.jpg',
    width:'6'
  },
  {
    name: 'React',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s',
     width:'6'
  },
  {
    name: 'JavaScript',
    image: 'https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png',
     width:'61'
  },

  {
    name: 'GitHub',
    image: 'https://rijsat.com/wp-content/uploads/2021/07/github.png',
     width:'16'
  },
  {
    name: 'Node.js',
    image: 'https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png',
     width:'6'
  },
  {
    name: 'Java',
    image: 'https://cdn-clekk.nitrocdn.com/tkvYXMZryjYrSVhxKeFTeXElceKUYHeV/assets/images/optimized/rev-cc9e27e/litslink.com/wp-content/uploads/2020/11/what-is-java-image.png',
     width:'6'
  },
  {
    name: 'Fullstack',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQEY2jEouN8OcQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712339413058?e=2147483647&v=beta&t=XBnziUcaaBwjvVWthz4Ma2wXgidYcAOmHYBGg5h6Jws',
     width:'6'
  },
];

  return (
    <div className='bg-zinc-700 grid grid-flow-col grid-rows-2  gap-4" h-[] w-full ' >

      {arr.map((val,index)=>{
        return(
          <div  key={index} className='w-full p-20'>
            <img className='h-40 '  key={index} src={val.image} alt="" />
            <div  className='w-full h-[30%] text-center rounded bg-cyan-400 mt-3'> 
              <div style={{width:`${val.width}%`}} className={`bg-green-400  h-full text-center`}></div>
              
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Resume
