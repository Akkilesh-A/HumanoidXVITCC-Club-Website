import React from 'react'
import SectionHeading from './SectionHeading'

const VideoPlayer = () => {
  return (
    <div id="projects" className='mb-[10vh] sm:flex sm:flex-col items-center '>
        <SectionHeading text1="Our" text2="Projects" ptext="" />
        <div className='flex justify-center items-center w-[100%] sm:w-[80%]  flex-wrap'>
            <video className='flex justify-center items-center rounded-xl' width="500" height="auto"controls >
                <source src="assets\Events\TechnoVIT\SelfBalance.mp4" type="video/mp4" />
            </video> 
        </div>
        
    </div>
  )
}

export default VideoPlayer