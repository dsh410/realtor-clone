import React from 'react'
import spinner from '../public/Spinner@1x-1.0s-200px-200px.svg'; // Adjust the path as necessary   

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
  <svg className="w-12 h-12" s alt="Loading Spinner">
     <image href={spinner} width="100%" height="100%" />
  </svg>
</div>
  )

  
}
