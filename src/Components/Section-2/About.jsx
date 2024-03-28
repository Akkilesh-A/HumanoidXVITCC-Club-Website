import React,{useState} from 'react'

const WhoWeAre = () => {
  
  function alertTwitter(){
    alert("We don't have a Twitter Accout yet 😂")
  }

  function setDesignTrue(){
    setDesign(true);
  }
  function setDesignFalse(){
    setDesign(false);
  }

  function setElectricalTrue(){ 
    setElectrical(true);  
  }
  function setElectricalFalse(){
    setElectrical(false);
  }

  function setManagementTrue(){
    setManagement(true);
  }
  function setManagementFalse(){
    setManagement(false);
  }

  function setSocialMediaTrue(){
    setSocialMedia(true);
  } 
  function setMediaFalse(){
    setSocialMedia(false);
  }

  const [isDesign,setDesign]=useState(false);
  const [isElectrical,setElectrical]=useState(false);
  const [isManagement,setManagement]=useState(false);
  const [isSocialMedia,setSocialMedia]=useState(false);
    
  return (
    <div id="about" className='text-white mb-[10vh] my-[2vh]'>

      {/* <hr className='ml-[8vw] w-[60vw] mb-[5vh]'/> */}
      <hr className='ml-[8vw] w-[84vw] my-[5vh]'/> 


      <div className='flex sm:flex-col items-center justify-center '>
        <div className='px-[8vw] flex flex-col  z-0 justify-center'>
              <h1 className='text-[#178376] text-5xl pb-4 font-bold'>Who are we?</h1>
              <h3 className='sm:pl-8 text-white text-2xl'>We are a group of like minded individuals promoting <span className=' font-semibold'>Humanoid Robotics</span> in VIT,Chennai</h3>
        </div>
        <img src="assets/Logos/sheldon_logo.png" alt='WhoWeAre' className='duration-500 w-[20vw] sm:w-[50vw] mr-[10vw] object-cover' usemap="#image-map" />
        <map name="image-map" onClick={alertTwitter}>
            <area alt="X logo" href="#" onClick={alertTwitter}  coords="100,100,10" shape="circle" />
        </map>
        {/* <img src='assets/Logos/sheldon_logo.png' onClick={alertTwitter} alt='WhoWeAre' className='hover:scale-125 duration-500 hover:duration-500 w-[20vw] sm:w-[50vw] mr-[10vw] object-cover' /> */}
      </div>
      <hr className='ml-[8vw] w-[84vw] my-[5vh]'/> 

    
      {/* <hr className='ml-[32vw] w-[60vw] my-[10vh]'/>  */}

      <div className='flex sm:flex-col ml-[8vw] w-[84vw] sm:h-[auto] justify-around items-center'>
        <div className='sm:order-1 flex w-[35vw] sm:w-[60vw] items-center justify-between '>
          <img onMouseOver={setDesignTrue} onMouseOut={setDesignFalse} src='assets/Departments/design&automation.png' alt='Departments' className={isDesign?'duration-500 scale-[2] w-[6vw] sm:w-[10vw] h-auto':'hover:scale-[2]  scale-[1.5] duration-500 hover:duration-500  w-[6vw] sm:w-[10vw] h-auto' }/>
          <img onMouseOver={setElectricalTrue} onMouseOut={setElectricalFalse} src='assets/Departments/electrical&programming.png' alt='Departments' className={isElectrical?'duration-500 scale-[2] w-[6vw] sm:w-[10vw] h-auto':'hover:scale-[2]  scale-[1.5] duration-500 hover:duration-500  w-[6vw] sm:w-[10vw] h-auto' } />
          <img onMouseOver={setManagementTrue} onMouseOut={setManagementFalse} src='assets/Departments/management.png' alt='Departments' className={isManagement?'duration-500 scale-[2] w-[6vw] sm:w-[10vw] h-auto':'hover:scale-[2]  scale-[1.5] duration-500 hover:duration-500  w-[6vw] sm:w-[10vw] h-auto' } />
          <img onMouseOver={setSocialMediaTrue} onMouseOut={setMediaFalse} src='assets/Departments/socialmedia.png' alt='Departments' className={isSocialMedia?'duration-500 scale-[2] w-[6vw] sm:w-[10vw] h-auto':'hover:scale-[2] scale-[1.5]  duration-500 hover:duration-500  w-[6vw] sm:w-[10vw] h-auto' } />                
        </div>
        <div className='flex flex-col pt-[5vh] z-0 text-white sm:mb-16 '>
          <h1 className='text-[#178376] text-5xl pb-4 font-bold'>What do we have?</h1>
          <div className='pl-8'>
            <h3 className='text-white text-2xl font-semibold'>We oversee 4 departments </h3> 
            <div className='pl-4'>
              <h3 onMouseOver={setDesignTrue} onMouseOut={setDesignFalse} className={isDesign?'scale-125 duration-500 text-2xl':'hover:scale-125 duration-500 hover:duration-500 text-xl sm:text-[1em]'}>Design & Automation</h3>
              <h3 onMouseOver={setElectricalTrue} onMouseOut={setElectricalFalse} className={isElectrical?'scale-125 text-2xl duration-500':'hover:scale-125 duration-500 hover:duration-500 text-xl sm:text-[1em]'}>Electrical & Programming</h3>
              <h3 onMouseOver={setManagementTrue} onMouseOut={setManagementFalse} className={isManagement?'scale-125 text-2xl duration-500':'hover:scale-125 duration-500 hover:duration-500 text-xl sm:text-[1em]'}>Management</h3>
              <h3 onMouseOver={setSocialMediaTrue} onMouseOut={setMediaFalse} className={isSocialMedia?'scale-125 text-2xl duration-500':'hover:scale-125 duration-500 hover:duration-500 text-xl sm:text-[1em]'}>Social Media & Content</h3>
            </div>
          </div>       
        </div>
      </div> 
      <hr className='ml-[8vw] w-[84vw] my-[10vh]'/> 
      
      {/* <hr className='ml-[8vw] w-[60vw] my-[10vh] sm:mt-[20vh]'/> */}

      <div className='flex sm:flex-col items-center justify-center '>
        <div className='px-[8vw] sm:pb-8 flex flex-col  z-0 justify-center'>
              <h1 className='text-[#178376] text-5xl pb-4 font-bold'>What do we do?</h1>
              <h3 className='sm:pl-8 text-white text-2xl'>Our mission is to innovate in humanoid robotics, creating many more bots for everyday community and home use.</h3>
        </div>
        <img src='assets/RobotAssets/robot hand.png' alt='WhoWeAre' className='w-[20vw] sm:ml-[10vw] sm:mt-[5vh] sm:w-[50vw] mr-[10vw] object-cover' />
      </div>

      <hr className='ml-[8vw] w-[84vw] my-[5vh]'/> 

    </div>
  )
}

export default WhoWeAre