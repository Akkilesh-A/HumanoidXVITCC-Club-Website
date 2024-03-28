import React from 'react'
import SectionHeading from '../ExtraFeatures/SectionHeading'

const projects=[
    {imgURL: "assets/Events/Flipkart/3.jpeg", title: 'Drone', description: 'Drone that helped us reach finals of Flipkart GRID 4.0 Robotics Competition'},
    {imgURL: "assets/Events/TechnoVIT/1.jpg", title: 'Project 1', description: 'This is a description of project 1'},
    {imgURL: "assets/Events/TechnoVIT/2.jpg", title: 'Project 2', description: 'This is a description of project 2'},
]

function createProjectCard(project){
    return (
        <div className='hover:scale-110 duration-500 hover:duration-500 m-4 sm:m-8 flex justify-center items-center text-white flex-col '>
            <img loading="lazy" className='w-[18vw] sm:w-[100%] rounded-t-xl' src={project.imgURL} alt={project.title}/>
            <div className='flex flex-col items-center sm:w-[100%] w-[18vw] rounded-b-xl bg-[#178376] p-4'>
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