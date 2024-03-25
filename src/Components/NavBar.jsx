import React,{useState} from 'react'
import {Link} from 'react-scroll'


function NavBar() {
  
  const [pizzaClicked,setPizzaClicked]= useState(false);
  
  function pizzaClick(){
    setPizzaClicked(!pizzaClicked);
  }

  return (
    <div className=' z-10 flex flex-col fixed text-xs opacity-[85]'>
      <div className='NavBar-bg fixed w-[100vw] sm:h-[8.5vh] h-[12vh] pr-8 pl-8 b-0 flex bg-black text-white font-bold'>
          <div className='flex items-center w-[15vw] font-'>
              <img src='\assets\Logos\logo.png' alt='logo' className=' h-[80%] ' />
              <h1 className='text-[1.5em] '>HumanoidX</h1>
          </div>
          <div className=' flex items-center text-[1.5em] font-semibold justify-end w-[85vw]'>
            
              <Link to="about" spy={true} smooth={true} offset={-150} duration={500} className='sm:invisible px-[1vw] cursor-pointer '><button className='mx-2 my-8'>About</button></Link>
              <Link to="projects" spy={true} smooth={true} offset={-105} duration={500} className='sm:invisible px-[1vw] cursor-pointer'><button className='mx-2 my-8'>Projects</button></Link>
              <Link to="achievements" spy={true} smooth={true} offset={-105} duration={500} className='sm:invisible px-[1vw] cursor-pointer'><button className='mx-2 my-8'>Achievements</button></Link>
              <Link to="events" spy={true} smooth={true} offset={-100} duration={500} className='sm:invisible px-[1vw] cursor-pointer'><button className='mx-2 my-8 animate-pulse' id="glow">New Event</button></Link>
              <Link to="obs" spy={true} smooth={true} offset={-105} duration={500} className='sm:invisible px-[1vw] cursor-pointer'><button className='mx-2 my-8'>OBs</button></Link>

              
              <img src='\assets\pizza.png' alt='search' onClick={pizzaClick} className={pizzaClicked?'relative h-[3em] mr-12 custom:hidden duration-300':'h-[3em] sm:mr-12 origin-center rotate-45 custom:hidden duration-300'} />
              <div onClick={pizzaClick} className={pizzaClicked?'duration-500 ':'duration-500 hidden '}>
                <div className='z-[100] flex flex-col absolute right-10 top-[4em] NavBar-bg text-[1em] bg-[#178376] text-white p-4 rounded'>
                  <Link onClick={pizzaClick} to="about" spy={true} smooth={true} offset={-100} duration={1000} className='cursor-pointer sm:visible text-black font-bold invisible px-[1vw] py-[1vh]'>About</Link>
                  <Link onClick={pizzaClick} to="projects" spy={true} smooth={true} offset={-100} duration={1000} className='cursor-pointer sm:visible invisible font-bold px-[1vw] py-[1vh]'>Projects</Link>
                  <Link onClick={pizzaClick} to="achievements" spy={true} smooth={true} offset={-100} duration={1000} className='cursor-pointer sm:visible invisible text-black font-bold px-[1vw] py-[1vh]'>Achievements</Link>
                  <Link onClick={pizzaClick} to="events" spy={true} smooth={true} offset={-100} duration={1000} id="glow" className='cursor-pointer sm:visible  font-bold invisible px-[1vw] py-[1vh] animate-pulse'>New Event</Link>
                  <Link onClick={pizzaClick} to="obs" spy={true} smooth={true} offset={-100} duration={1000} className='cursor-pointer sm:visible text-black font-bold invisible px-[1vw] py-[1vh]'>OBs</Link>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default NavBar