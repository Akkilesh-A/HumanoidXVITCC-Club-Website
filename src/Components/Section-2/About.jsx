import React,{ useState,useEffect }  from 'react'
import {Blurhash} from 'react-blurhash'

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

  const [imageLoaded1,setImageLoaded1] = useState(false);

  useEffect(()=>{
    const img = new Image();
    img.src = "assets/Logos/sheldon_logo.png";
    img.onload = () => {
      setImageLoaded1(true)
    }
  },[imageLoaded1])

  const [imageLoaded2,setImageLoaded2] = useState(false);

  useEffect(()=>{
    const img = new Image();
    img.src = "assets/Departments/design&automation.png";
    img.onload = () => {
      setImageLoaded2(true)
    }
  },[imageLoaded2])

  const [imageLoaded3,setImageLoaded3] = useState(false);

  useEffect(()=>{
    const img = new Image();
    img.src = "assets/Departments/electrical&programming.png";
    img.onload = () => {
      setImageLoaded3(true)
    }
  },[imageLoaded3])

  const [imageLoaded4,setImageLoaded4] = useState(false);

  useEffect(()=>{
    const img = new Image();
    img.src = "assets/Departments/management.png";
    img.onload = () => {
      setImageLoaded4(true)
    }
  },[imageLoaded4])

  const [imageLoaded5,setImageLoaded5] = useState(false);

  useEffect(()=>{
    const img = new Image();
    img.src = "assets/Departments/socialmedia.png";
    img.onload = () => {
      setImageLoaded5(true)
    }
  },[imageLoaded5])

  const [imageLoaded6,setImageLoaded6] = useState(false);

  useEffect(()=>{
    const img = new Image();
    img.src = "assets/RobotAssets/robot hand.png";
    img.onload = () => {
      setImageLoaded6(true)
    }
  },[imageLoaded6])
    
  return (
    <div id="about" className='text-white mb-[10vh] my-[2vh]'>

      {/* <hr className='ml-[8vw] w-[60vw] mb-[5vh]'/> */}
      <hr className='ml-[8vw] w-[84vw] mt-[20vh] mb-[5vh]'/> 


      <div className='flex sm:flex-col items-center justify-center '>
        <div className='px-[8vw] flex flex-col  z-0 justify-center'>
              <h1 className='text-[#178376] text-5xl pb-4 font-bold'>About Us!</h1>
              <h3 className='sm:pl-8 text-white text-2xl'>We are a group of like minded individuals promoting <span className=' font-semibold'>Humanoid Robotics</span> in VIT,Chennai</h3>
        </div>
        {!imageLoaded1 && <Blurhash className='w-[20vw] sm:w-[50vw] mr-[10vw] rounded-xl' hash="egK_auV@^+ozoJozRjj[ofkC~WozM{WBWWof%Ma|NGaywcWVIpoeay" width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} />}
        {imageLoaded1 && <img src="assets/Logos/sheldon_logo.png" alt='WhoWeAre' className='duration-500 w-[20vw] sm:w-[50vw] mr-[10vw] object-cover' usemap="#image-map" />}
        <map name="image-map" onClick={alertTwitter}>
            <area alt="X logo" href="#" onClick={alertTwitter}  coords="100,100,10" shape="circle" />
        </map>
      </div>
      <hr className='ml-[8vw] w-[84vw] my-[5vh]'/> 

    
      {/* <hr className='ml-[32vw] w-[60vw] my-[10vh]'/>  */}

      <div className='flex sm:flex-col ml-[8vw] w-[84vw] sm:h-[auto] justify-around items-center'>
        <div className='sm:order-1 flex w-[35vw] sm:w-[60vw] items-center justify-between '>
          {!imageLoaded2 && <Blurhash className='w-[20vw] sm:w-[50vw] mr-[10vw] rounded-xl' hash="KJO40Yj[^*%MfkV@~WfQIo" width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} />}
          {imageLoaded2 && <img onMouseOver={setDesignTrue} onMouseOut={setDesignFalse} src='assets/Departments/design&automation.png' alt='Departments' className={isDesign?'duration-500 scale-[2] w-[6vw] sm:w-[10vw] h-auto':'hover:scale-[2]  scale-[1.5] duration-500 hover:duration-500  w-[6vw] sm:w-[10vw] h-auto' }/> }
          {!imageLoaded3 && <Blurhash className='w-[20vw] sm:w-[50vw] mr-[10vw] rounded-xl' hash="KJO40Yj[^*%MfkV@~WfQIo" width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} />}
          {imageLoaded3 && <img onMouseOver={setElectricalTrue} onMouseOut={setElectricalFalse} src='assets/Departments/electrical&programming.png' alt='Departments' className={isElectrical?'duration-500 scale-[2] w-[6vw] sm:w-[10vw] h-auto':'hover:scale-[2]  scale-[1.5] duration-500 hover:duration-500  w-[6vw] sm:w-[10vw] h-auto' } /> }
          {!imageLoaded4 && <Blurhash className='w-[20vw] sm:w-[50vw] mr-[10vw] rounded-xl' hash="KJO40Yj[^*%MfkV@~WfQIo" width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} />}
          {imageLoaded4 && <img onMouseOver={setManagementTrue} onMouseOut={setManagementFalse} src='assets/Departments/management.png' alt='Departments' className={isManagement?'duration-500 scale-[2] w-[6vw] sm:w-[10vw] h-auto':'hover:scale-[2]  scale-[1.5] duration-500 hover:duration-500  w-[6vw] sm:w-[10vw] h-auto' } /> }
          {!imageLoaded5 && <Blurhash className='w-[20vw] sm:w-[50vw] mr-[10vw] rounded-xl' hash="KJO40Yj[^*%MfkV@~WfQIo" width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} />}
          {imageLoaded5 &&  <img onMouseOver={setSocialMediaTrue} onMouseOut={setMediaFalse} src='assets/Departments/socialmedia.png' alt='Departments' className={isSocialMedia?'duration-500 scale-[2] w-[6vw] sm:w-[10vw] h-auto':'hover:scale-[2] scale-[1.5]  duration-500 hover:duration-500  w-[6vw] sm:w-[10vw] h-auto' } /> }            
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
        {!imageLoaded6 && <Blurhash className='w-[20vw] sm:w-[50vw] mr-[10vw] rounded-xl' hash="|7PGdF%h~WD$00-p-;NGs:%MaeogIoay%1R*RkxuNHt7ofNG%gt6IAogt7?v%2ivRPWrR-azxZjYIUsm-poIRixvt7Mxf5%L-;%ND%M_-oofIoRjDiMxtRtRaesmt8W=j[WCM{f+xuozWBayt7t8_3IU00t7-;M{RjxuR+" width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} />}
        {imageLoaded6 && <img src='assets/RobotAssets/robot hand.png' alt='WhoWeAre' className='w-[20vw] sm:ml-[10vw] sm:mt-[5vh] sm:w-[50vw] mr-[10vw] object-cover' /> }
      </div>

      <hr className='ml-[8vw] w-[84vw] my-[5vh]'/> 

    </div>
  )
}

export default WhoWeAre