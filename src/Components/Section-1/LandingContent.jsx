import React,{useState} from 'react'

const LandingContent = () => {
  return (
    <div className='pt-[10vh] sm:pb-0 pb-[70vh] sm:flex-col sm:pt-[14vh] text-white badges'>
      <div className='sm:hidden myvideo flex absolute justify-center items-center w-[100%] sm:w-[80%]  flex-wrap'>
          {/* <iframe className='mx-4 my-4' width="100%" height="500"
            src="https://www.youtube.com/embed/RYRiMNGDgL4?loop=1&mute=1&autoplay=1&controls=0&playlist=RYRiMNGDgL4">
          </iframe> */}
          <video autoPlay muted loop>
            <source src="assets/reel.mp4" type="video/mp4" />
          </video>
      </div>
      <div className='flex sm:flex-col'>
        <div className='px-[8vw] flex flex-col w-[80vw] sm:w-[90vw] pt-[8vh] sm:pt-[0] pb-[20vh] sm:pb-8 z-0 justify-center'>
        <h1 className='text-[#178376] bg-clip-text sm:text-[4em] text-[6em] pb-6 font-bold'>Build, Integrate, Innovate</h1>
        <h3 className='text-white text-[2.5em] font-semibold'>Shaping Tomorrrow, Today!</h3>
        </div>
        <div className='mxl:pt-24 mxl:pr-24 pt-24 sm:pt-0 flex items-center animate-bouncing  sm:justify-center sm:items-center  '> 
          <img src='assets/robot.png' alt='robot' className='' />
        </div>
      </div>
      
    </div>
  )
}

export default LandingContent