import React,{useState} from 'react'


function Header() {
  
  const [pizzaClicked,setPizzaClicked]= useState(false);
  
  function pizzaClick(){
    setPizzaClicked(!pizzaClicked);
  }

  return (
    <div className=' z-10 flex flex-col fixed text-xs '>
      <div className='header-bg fixed w-[100vw] sm:h-[8.5vh] h-[15vh] pr-8 pl-8 b-0 flex bg-black text-white font-bold'>
          <div className='flex items-center w-[15vw] font-'>
              <img src='\assets\logo.png' alt='logo' className=' h-[80%] ' />
              <h1 className='text-[1.5em] '>HumanoidX</h1>
          </div>
          <div className=' flex items-center text-[1.25em] font-semibold justify-end w-[85vw]'>
              <a href='#' className='sm:invisible px-[1vw]'>About</a>
              <a href='#' className='sm:invisible px-[1vw]'>Achievements</a>
              <a className='sm:invisible px-[1vw]'>Projects</a>
              <a className='sm:invisible px-[1vw]'>OBs</a>
              <img src='\assets\pizza.png' alt='search' onClick={pizzaClick} className={pizzaClicked?'relative h-[3em] ml-[1vw] custom:hidden duration-300':'h-[3em] ml-[1vw] origin-center rotate-45 custom:hidden duration-300'} />
              <div onClick={pizzaClick} className={pizzaClicked?'duration-500':'duration-500 hidden'}>
                <div className='flex flex-col absolute right-10 top-[5em] header-bg text-[1em] bg-[#178376] text-white p-4 rounded'>
                <a href='#' className='sm:visible text-black font-bold invisible px-[1vw] py-[1vh]'>About</a>
                <a href='#' className='sm:visible invisible font-bold px-[1vw] py-[1vh]'>Achievements</a>
                <a className='sm:visible invisible text-black font-bold px-[1vw] py-[1vh]'>Projects</a>
                <a className='sm:visible invisible font-bold px-[1vw] py-[1vh]'>OBs</a>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Header