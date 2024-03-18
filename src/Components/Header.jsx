import React from 'react'

const Header = () => {
  return (
    <div className=' z-10 flex flex-col fixed text-xs '>
      <div className='header-bg fixed w-[100vw] sm:h-[8.5vh] h-[15vh] pr-8 pl-8 b-0 flex bg-black text-white font-bold'>
          <div className='flex items-center w-[15vw] font-'>
              <img src='\assets\logo.png' alt='logo' className=' h-[80%] ' />
              <h1 className='text-[1.5em] '>HumanoidX</h1>
          </div>
          <div className='sm:invisible flex items-center text-[1.25em] font-semibold justify-end w-[85vw]'>
              <a href='#' className='px-[1vw]'>About</a>
              <a href='#' className='px-[1vw]'>Achievements</a>
              <a className='px-[1vw]'>Projects</a>
              <a className='px-[1vw]'>OBs</a>
          </div>
      </div>
    </div>
  )
}

export default Header