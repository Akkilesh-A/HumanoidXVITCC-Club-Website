import React from 'react'
import SectionHeading from '../SectionHeading'

const VideoPlayer = () => {
  return (
    <div id="projects" className='mb-[10vh] sm:flex sm:flex-col items-center '>
        <SectionHeading text1="Our" text2="Projects" ptext="" />
        <div className='flex justify-center items-center w-[100%] sm:w-[80%]  flex-wrap'>
            <iframe width="420" height="315"
              src="https://www.youtube.com/embed/U2KpRZCoysc?autoplay=1&mute=1&loop=1&controls=0">
            </iframe>
        </div>
        <hr className='ml-[8vw] w-[84vw] mt-[10vh]'/> 
    </div>
  )
}

export default VideoPlayer