import React from 'react'

const WhoWeAre = () => {
    
  return (
    <div className='text-white pb-[10vh] my-[2vh]'>

      <hr className='ml-[8vw] w-[60vw] mb-[5vh]'/>

      <div className='flex sm:flex-col items-center justify-center '>
        <div className='px-[8vw] flex flex-col  z-0 justify-center'>
              <h1 className='text-[#178376] text-5xl pb-4 font-bold'>Who are we?</h1>
              <h3 className='text-white text-3xl pb-2'>We are the official humanoid <span className='font-semibold text-[#178376]'>HUMANOIDX</span> Club of VIT,Chennai</h3>
              <h3 className='sm:invisible text-white text-xl'>We are a group of like minded individuals promoting <span className=' font-semibold text-[#178376]'>Humanoid Robotics</span> in VIT,Chennai</h3>
        </div>
        <img src='src/assets/sheldon_logo.png' alt='WhoWeAre' className='w-[20vw] sm:w-[50vw] mr-[10vw] object-cover' />
      </div>

      <hr className='ml-[32vw] w-[60vw] my-[10vh]'/> 


      <div className='flex sm:flex-col ml-[8vw] w-[84vw] h-[50vh] justify-around items-center'>
        <div className='sm:order-1 animate-bounce flex w-[40vw] items-center justify-center '>
          <img src='src/assets/Departments/dept-1.png' alt='Departments' className='w-[15vw] h-auto' />
          <img src='src/assets/Departments/dept-2.png' alt='Departments' className='w-[15vw] h-auto' />
          <img src='src/assets/Departments/dept-3.png' alt='Departments' className='w-[15vw] h-auto' />        
        </div>
        <div className='flex flex-col pt-[5vh] z-0 '>
          <h1 className='text-[#178376] text-5xl pb-4 font-bold'>What we do?</h1>
          <h3 className='text-white text-3xl pb-2'>We oversee 3 departments </h3> 
          <h3 className='text-[#178376] text-xl'>Design & Automation</h3>
          <h3 className='text-white text-xl '>Electrical & Programming</h3>
          <h3 className='text-[#178376] text-xl '>Management</h3>
        </div>
      </div> 
      
      <hr className='ml-[8vw] w-[60vw] mt-[10vh]'/>

    </div>
  )
}

export default WhoWeAre