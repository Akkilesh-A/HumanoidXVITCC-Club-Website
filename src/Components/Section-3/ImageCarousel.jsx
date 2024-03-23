import GalleryHeading from '../OBs/GalleryHeading';
import { useState, useEffect } from 'react';
import pictures from './picturesImageCarousel';

const ImageCarousel = () => {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current => (current === pictures.length - 1 ? 0 : current + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [pictures.length]);

    return (
        <div id="achievements">
            <GalleryHeading text1="Our" text2="Events & Achievements" ptext="Our Events over the years!" />
            <div className='flex flex-col items-center text-white'>
                <img
                    src={pictures[current].src}
                    alt={pictures[current].text}
                    className='custom:h-[60vh] sm:w-[70vw] hover:scale-110 duration-500 hover:duration-500 rounded-lg'
                />
                <p className='p-4 text-s font-semibold'>{pictures[current].text}</p>
            </div>
        </div>
    );
};

export default ImageCarousel