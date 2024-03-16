import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default () => (
    <Carousel className='z-0 flex flex-col ml-[30vw] mr-[30vw] w-[40vw] text-center ' autoPlay>
        <div >
            <img alt="" className='rounded-xl' src="src/assets/Synthetix23/1.jpg" />
            <p className="legend">Synthetix23</p>
        </div>
        <div>
            <img alt="" src="src/assets/Synthetix23/2.jpg" />
            <p className="legend">Synthetix23</p>
        </div>
        <div>
            <img alt="" src="src/assets/Synthetix23/3.jpg" />
            <p className="legend">Synthetix23</p>
        </div>
        <div>
            <img alt="" src="src/assets/NSS/1.jpg" />
            <p className="legend">NSS</p>
        </div>
    </Carousel>
);
