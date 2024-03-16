import React from 'react'

const WhoWeAre = () => {
    
  return (
    <div className='text-white pb-[10vh]'>
        <div className='px-[8vw] flex flex-col pt-[20vh] z-0 justify-end'>
            <h1 className='text-[#178376] text-5xl pb-4 font-bold'>Who are we?</h1>
            <h3 className='text-white text-3xl pb-2'>We are the official humanoid <span className='font-semibold text-[#178376]'>HUMANOIDX</span> Club of VIT,Chennai</h3>
            <h3 className='text-white text-xl'>We are a group of like minded individuals promoting <span className=' font-semibold text-[#178376]'>Humanoid Robotics</span> in VIT,Chennai</h3>
        </div>
        <div className='px-[8vw] flex flex-col pt-[10vh] z-0 items-end justify-end'>
            <h1 className='text-[#178376] text-5xl pb-4 font-bold'>What we do?</h1>
            <h3 className='text-white text-3xl pb-2'>We oversee 4 departments </h3> 
            <h3 className='text-[#178376] text-xl'>Design & Automation</h3>
            <h3 className='text-white text-xl '>Electrical & Programming</h3>
            <h3 className='text-[#178376] text-xl '>Management</h3>
            <h3 className='text-white text-xl '>Social Media & Content</h3>
        </div>
    </div>
  )
}

export default WhoWeAre