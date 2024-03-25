import React from 'react'

const VideoPlayer = () => {
  return (
    <div className='mb-[10vh] sm:flex sm:flex-col items-center '>
        <div className='flex justify-center items-center w-[100%] sm:w-[80%]  flex-wrap'>
            <iframe className='mx-4 my-4' width="420" height="315"
              src="https://www.youtube.com/embed/U2KpRZCoysc?loop=1&mute=1&autoplay=1&controls=0&playlist=U2KpRZCoysc">
            </iframe>
        </div>
        <hr className='ml-[8vw] w-[84vw] my-[5vh]'/> 
    </div>
  )
}

export default VideoPlayer