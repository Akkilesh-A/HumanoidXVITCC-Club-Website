import SectionHeading from '../sectionHeading';
import { useState, useEffect } from 'react';
import pictures from './picturesImageCarousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const ImageCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrent(current => (current === pictures.length - 1 ? 0 : current + 1));
        }, 3000);
        setIntervalId(id);

        return () => clearInterval(id);
    }, [pictures.length]);

    const goToNext = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    };

    const goToPrevious = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    };

    const handleMouseEnter = () => {
        clearInterval(intervalId);
    };

    const handleMouseLeave = () => {
        const id = setInterval(() => {
            setCurrent(current => (current === pictures.length - 1 ? 0 : current + 1));
        }, 3000);
        setIntervalId(id);
    };

    return (
        <div id="achievements" className='mb-[10vh]'>
            <SectionHeading text1="Our" text2="Events & Achievements" ptext="Our Events over the years!" />
            <div className='flex justify-center items-center'>
                <FaArrowLeft className="text-white cursor-pointer mb-16 mr-8 text-3xl" onClick={goToPrevious} />
                <div className='flex flex-col items-center text-white relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img
                        src={pictures[current].src}
                        alt={pictures[current].text}
                        className='custom:h-[60vh] sm:w-[70vw] hover:scale-110 duration-500 mb-[2vh] hover:duration-500 rounded-lg'
                    />
                    <p className='p-4 text-s font-semibold'>{pictures[current].text}</p>
                </div>
                <FaArrowRight className="text-white cursor-pointer mb-16 ml-8 text-3xl" onClick={goToNext} />
            </div>
            <hr className='ml-[8vw] w-[84vw] mt-[10vh]'/> 
        </div>
    );
};

export default ImageCarousel;
