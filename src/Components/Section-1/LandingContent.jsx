import React,{useState} from 'react'
import MusicPlayer from '../MusicPlayer'

const LandingContent = () => {
  return (
    <div className='sm:flex-col justify-center flex text-white badges'>
      <video className='sm:hidden z-0' autoplay muted loop id="myVideo">
        <source src="assets\reel.mp4" type="video/mp4" />
      </video>
      <div className='z-10 sm:z-0'>
        <div className='flex sm:flex-col'>
          <div className='mt-[20vh] sm:mt-[10vh] px-[8vw] flex flex-col w-[80vw] sm:w-[90vw] pt-[8vh] sm:pt-[0] pb-[20vh] justify-center'>
            <h1 className='text-[#178376] bg-clip-text sm:text-[4em] text-[5em] pb-6 font-bold'>Build, Integrate, Innovate</h1>
            <h3 className='text-white text-3xl font-semibold'>Shaping Tomorrrow, Today!</h3>
          </div>
          <div className='mxl:pt-24 mxl:pr-24 flex items-end  sm:justify-center sm:items-center animate-bounce '> 
            <img src='assets/robot.png' alt='robot' className='' />
          </div>
        </div>
        <MusicPlayer />
      </div>
    </div>
  )
}

export default LandingContent




















//before having background video
// import React,{useState} from 'react'
// import MusicPlayer from '../MusicPlayer'

// const LandingContent = () => {
//   return (
//     <div className=' sm:flex-col justify-center flex text-white badges'>
//       <video className='sm:hidden z-0' autoplay muted loop id="myVideo">
//         <source src="assets\reel.mp4" type="video/mp4" />
//       </video>
//       <div className='mt-[20vh] sm:mt-[10vh] px-[8vw] flex flex-col w-[80vw] sm:w-[90vw] pt-[8vh] sm:pt-[0] pb-[20vh] z-0 justify-center'>
//         <h1 className='text-[#178376] bg-clip-text sm:text-[4em] text-[5em] pb-6 font-bold'>Build, Integrate, Innovate</h1>
//         <h3 className='text-white text-3xl font-semibold'>Shaping Tomorrrow, Today!</h3>
//       </div>
//       <div className='mxl:pt-24 mxl:pr-24 flex items-end  sm:justify-center sm:items-center animate-bounce '> 
//         <img src='assets/robot.png' alt='robot' className='' />
//       </div>
//     </div>
//   )
// }

// export default LandingContent