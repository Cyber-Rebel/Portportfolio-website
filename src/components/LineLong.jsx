import React, { useEffect, useState } from 'react'

const LineLong = ({bg ,position,rotate}) => {



    if(position=="top"){
        return(
             <div className="thereline_code_use flex flex-col items-center">
    <div className={`w-4 h-4 bg-${bg} border-2 border-blue-300 rounded-full`}>
    </div>
    <div className="w-px h-40 bg-slate-200">
    </div>
  </div>
        )
    }else{
  return (
   <div  className="thereline_code_use flex flex-col items-center">
    <div className="w-px h-40 bg-gray-300"></div>
    <div  className={`w-4 h-4 bg-${bg} border-2 border-blue-300 rounded-full`}></div>
  </div>
  )
}}

export default LineLong

// setTimeout ek fucnation nahi tar useEffct