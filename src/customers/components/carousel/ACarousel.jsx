import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselData } from './CarouselData';


const ACarousel = () => {
    const items = CarouselData.map((item) =><img className='pointer-cursor' role='present' src={item.image} alt=""/>);

    return (
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        />
    )
}
export default ACarousel;