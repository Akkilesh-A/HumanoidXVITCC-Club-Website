import React,{useState} from 'react'

const LandingContent = () => {
  return (
    <div className='pt-[20vh] sm:flex-col sm:pt-[14vh] flex text-white badges'>
      <div className='px-[8vw] flex flex-col w-[80vw] sm:w-[90vw] pt-[8vh] sm:pt-[0] pb-[20vh] z-0 justify-center'>
        <h1 className='text-[#178376] bg-clip-text sm:text-[4em] text-[6em] pb-6 font-bold'>Build, Integrate, Innovate</h1>
        <h3 className='text-white text-[2.5em] font-semibold'>Shaping Tomorrrow, Today!</h3>
      </div>
      <div className='mxl:pt-24 mxl:pr-24 pt-24 flex items-center animate-bouncing  sm:justify-center sm:items-center  '> 
        <img src='assets/robot.png' alt='robot' className='' />
      </div>
    </div>
  )
}

export default LandingContent