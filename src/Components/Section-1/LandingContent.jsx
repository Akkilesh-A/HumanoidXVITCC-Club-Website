import React,{useState} from 'react'
import MusicPlayer from '../ExtraFeatures/MusicPlayer'

const LandingContent = () => {
  return (
    <div className='pt-[10vh] sm:h-[auto] text-white badges'>
      <div className='sm:hidden flex blur absolute justify-center items-center w-[100%]'>
          <video autoPlay muted loop>
            <source src="assets/reel.mp4" type="video/mp4" />
          </video>
      </div>
      <div className='flex flex-col'>
        <div className='z-0 flex sm:flex-col'>
          <div className='px-[4vw] flex flex-col sm:w-[90vw] pt-[8vh] sm:pt-[0] sm:pb-8 z-0 justify-center'>
          <h1 className='text-[#178376] bg-clip-text sm:text-[4em] text-[6em] pb-6 font-bold'>Build<span>|</span> Integrate<span>|</span> Innovate<span>|</span></h1>
          <h3 className='text-white text-[2.5em] font-semibold'>Shaping Tomorrrow, Today!</h3>
          </div>
          <div className='mxl:pt-24 mxl:pr-24 flex items-center animate-bouncing  sm:justify-center sm:items-center  '> 
            <img loading="lazy" src='assets/robot.png' alt='robot' className='' />
          </div>
        </div>
        <MusicPlayer/>
      </div> 
    </div>
  )
}

export default LandingContent