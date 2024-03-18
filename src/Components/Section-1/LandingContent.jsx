import React,{useState} from 'react'

const LandingContent = () => {
  return (
    <div className='pt-[20vh] sm:flex-col flex sm:pb-0 pb-[20vh] text-white badges'>
      <div className='px-[8vw] flex flex-col w-[80vw] sm:w-[90vw] pt-[8vh] sm:pt-[0] pb-[20vh] z-0 justify-center'>
        <h1 className='text-[#178376] bg-clip-text  text-[4em] pb-6 font-bold'>Build, Integrate, Innovate</h1>
        <h3 className='text-white text-3xl font-semibold'>Shaping Tomorrrow, Today!</h3>
      </div>
      <div className='mxl:pt-24 mxl:pr-24 flex items-end  sm:justify-center sm:items-center animate-bounce '> 
        <img src='assets/robot.png' alt='robot' className='' />
      </div>
    </div>
  )
}

export default LandingContent