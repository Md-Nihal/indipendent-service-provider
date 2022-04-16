import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
};
return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Exclusive photo shoot</h3>
                <p>Capture your moment in frame for rest of life.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Destination wedding</h3>
                <p>Have a plan? Share with us.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Upgrader accessories </h3>
                <p>
                    Try us with exclusive devices. And get your special moment
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);
};

export default Banner;