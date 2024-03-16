import React from 'react'

const LandingContent = () => {
  return (
    <div className='pt-[20vh] pb-[10vh] text-white'>
      <div className='px-[8vw] flex flex-col w-[80vw] pt-[8vh] pb-[20vh] z-0 justify-center'>
        <h1 className='text-[#178376] text-5xl pb-6 font-bold'>Build, Integrate, Innovate</h1>
        <h3 className='text-white text-3xl font-semibold'>Shaping Tomorrrow, Today!</h3>
      </div>
      <div className='z-0 flex justify-center animate-bounce '> 
        <p className='px-2 text-s'>Scroll Down</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="18" viewBox="0 0 384 512">
          <path fill="#178376" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
        </svg>
      </div>
    </div>
  )
}

export default LandingContent