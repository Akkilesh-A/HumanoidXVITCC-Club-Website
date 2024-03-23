import GalleryHeading from '../OBs/GalleryHeading';
import { useState, useEffect } from 'react';

const ImageCarousel = () => {
    const pictures = [
        { id: 1, src: 'assets/Events/Synthetix23/1.jpg', text: "Synthetix'23" },
        { id: 2, src: 'assets/Events/Synthetix23/2.jpg', text: "Synthetix'23" },
        { id: 3, src: 'assets/Events/Synthetix23/3.jpg', text: "Synthetix'23" },
        { id: 4, src: 'assets/Events/NSS/1.jpg', text: 'NSS' }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current => (current === pictures.length - 1 ? 0 : current + 1));
        }, 3000);

        return () => clearInterval(interval); // Clear the interval on component unmount
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