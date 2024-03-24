import SectionHeading from '../sectionHeading';
import { useState, useEffect } from 'react';
import pictures from './picturesImageCarousel';

const ImageCarousel = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current => (current === pictures.length - 1 ? 0 : current + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, [pictures.length]);

    return (
        <div id="achievements" className='mb-[10vh]'>
            <SectionHeading text1="Our" text2="Events & Achievements" ptext="Our Events over the years!" />
            <div className='flex flex-col items-center text-white'>
                <img
                    src={pictures[current].src}
                    alt={pictures[current].text}
                    className='custom:h-[60vh] sm:w-[70vw] hover:scale-110 duration-500 mb-[2vh] hover:duration-500 rounded-lg'
                />
                <p className='p-4 text-s font-semibold'>{pictures[current].text}</p>
            </div>
            <hr className='ml-[8vw] w-[84vw] mt-[10vh]'/> 

        </div>
    );
};

export default ImageCarousel