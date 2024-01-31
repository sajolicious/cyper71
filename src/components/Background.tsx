// Background.tsx
import React from 'react'

const Background: React.FC = () => {
  return (
    <div className="relative  bg-gradient-to-b from-[#2C3E50] via-[#2980B9] to-[#3498DB] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white bg-opacity-25 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-white bg-opacity-25 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-1/3 h-1/3 bg-white bg-opacity-25 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-white bg-opacity-25 rounded-full"></div>
      {/* Add more shapes or elements as needed */}
    </div>
  )
}

export default Background
