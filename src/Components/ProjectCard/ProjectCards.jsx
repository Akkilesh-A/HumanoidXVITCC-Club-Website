import React,{ useState,useEffect }  from 'react'
import {Blurhash} from 'react-blurhash'
import SectionHeading from '../ExtraFeatures/SectionHeading'

const projects=[
    {imgURL: "assets/Projects/3.jpeg", title: 'Drone', description: 'Drone that helped us reach finals of Flipkart GRID 4.0 Robotics Competition',hash:"eLI5JN9G%1oft6x_M{t6M{of.mMx4.M{M{%h%Lbbt6t7xbx[IUayt8"},
    {imgURL: "assets/Projects/self_balancing.jpg", title: 'Self Balancing Bot', description: 'A bot that can balance itself on two wheels.',hash:"eDEU=AI9}qSh$3}txU-Tt6nN%$ivNeofS$%3RjM{bcWB?HnNNHkDWU"},
    // {imgURL: "assets/Events/TechnoVIT/2.jpg", title: 'Project 2', description: 'This is a description of project 2'},
]

function createProjectCard(project){

    const [imageLoaded,setImageLoaded] = useState(false)

    useEffect(()=>{
      const img = new Image();
      img.src = project.imgURL;
      img.onload = () => {
        setImageLoaded(true)
      }
    },[project.imgURL,imageLoaded])

    return (
        <div className='hover:scale-110 duration-500 hover:duration-500 m-4 sm:m-8 flex justify-center items-center text-white flex-col '>
            {!imageLoaded && <Blurhash className='w-[18vw] sm:w-[100%] rounded-t-xl' hash={project.hash} width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} />}
            {imageLoaded && <img loading="lazy" className='w-[18vw] sm:w-[100%] rounded-t-xl' src={project.imgURL} alt={project.title}/>}
            <div className='text-center flex flex-col items-center sm:w-[100%] w-[18vw] rounded-b-xl bg-[#178376] p-4'>
                <h1 className='text-[1.5rem] font-bold'>{project.title}</h1>
                <p className='text-center text-black font-semibold pt-4'>{project.description}</p> 
            </div>  
        </div>
    )
}

const ProjectCards = () => {
  return (
    <div id="projects">
        <SectionHeading text1="Our" text2="Projects" ptext="" />
        <div className='ml-[8vw] mr-[8vw]'>
            <div className='sm:inline flex flex-wrap justify-center'>
                {projects.map(createProjectCard)}
            </div>
        </div> 
    </div>
    
  )
}

export default ProjectCards