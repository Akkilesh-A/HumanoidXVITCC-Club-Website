import React from 'react'
import { useState } from 'react'
import GalleryHeading from '../OBs/GalleryHeading.jsx'

const ImageSlides = () => {

    const [current, setCurrent] = useState(0);

    const pictures=[
        {id:1,src:'assets/Events/Synthetix23/1.jpg',text:'Synthetix 23'},
        {id:2,src:'assets/Events/Synthetix23/2.jpg',text:'Synthetix 23'},
        {id:3,src:'assets/Events/Synthetix23/3.jpg',text:"Synthetix 23"},
        {id:4,src:'assets/Events/NSS/1.jpg',text:'NSS'}
    ]
    function func_right(){
        console.log(current);
        setCurrent(current+1);
    }
    function func_left(){
        console.log(current);
        setCurrent(current-1);
    }

    function createPictureCard(picture){
        if(picture.id==current+1){
            return (
                <div className='flex flex-col items-center text-white'>
                    <img src={picture.src} alt={picture.id} className='custom:h-[70vh] duration-500 hover:scale-110 rounded-lg'/>
                    <p className='p-4 text-s font-semibold'>{picture.text}</p>
                </div>
            )
        }   
    }

    return (
        <div id="achievements">
            <GalleryHeading text1="Our" text2="Events" ptext="Our Events over the years!" />
            <div className='mr-[15vw] sm:mr-[5vw] sm:ml-[5vw] ml-[15vw] mb-[10vh]'>
                <div className='flex items-center justify-center'>
                    <div className='w-[10vw] flex justify-end'>
                        <svg  width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={current>0?func_left:null}>
                            <path d="M1.75974 17.8836C0.151164 16.9109 0.151161 14.5776 1.75974 13.6049L23.3699 0.538092C25.036 -0.469368 27.1635 0.730352 27.1635 2.67741L27.1635 28.8111C27.1635 30.7582 25.036 31.9579 23.3699 30.9504L1.75974 17.8836Z" fill={current>0?"white":"#5E5E5E"} />
                        </svg>
                    </div>           
                    <div className='w-[60vw] sm:mr-[5vw] sm:ml-[5vw]  flex flex-col items-center justify-center'>
                        {pictures.map(createPictureCard)}
                    </div>
                    <div className='w-[10vw]'>
                        <svg  width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={current<pictures.length-1?func_right:null}>
                            <path d="M26.2403 13.4315C27.8489 14.4042 27.8489 16.7375 26.2403 17.7102L4.63018 30.777C2.96402 31.7845 0.836609 30.5847 0.836609 28.6377L0.836609 2.50398C0.836609 0.556921 2.96402 -0.6428 4.63018 0.36466L26.2403 13.4315Z" fill={current!==pictures.length-1?"white":"#5E5E5E"}/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ImageSlides