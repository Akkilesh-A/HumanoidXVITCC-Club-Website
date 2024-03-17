import React,{useState} from 'react'

const LandingContent = () => {
  return (
    <div className='z-[-10] pt-[20vh] flex sm:pb-0 pb-[20vh] text-white badges'>
      <div className='px-[8vw] flex flex-col w-[80vw] pt-[8vh] pb-[20vh] z-0 justify-center'>
        <h1 className='text-[#178376] text-7xl pb-6 font-bold'>Build, Integrate, Innovate</h1>
        <h3 className='text-white text-3xl font-semibold'>Shaping Tomorrrow, Today!</h3>
      </div>
      <div className='z-0 pt-24 pr-24 flex items-end  sm:justify-center  animate-bounce '> 
        <img src='src/assets/robot.png' alt='robot' className='w-[20vw] h-[20vw] object-contain' />
      </div>
    </div>
  )
}

export default LandingContent