import React,{ useState } from 'react'
import SectionCard from '../sectioncard/SectionCard';
import { Button } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_shirt } from '../../../Data/mens_shirt';


const Sectioncarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
      };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);
    const items = mens_shirt.slice(0,10).map((item) => <SectionCard product = {items}/>)
  return (
    <div className='border'>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && <Button variant="contained" 
          className="z-50 bg-white" 
          onClick={slideNext}
          sx={{
            position:'absolute', 
            top:"8rem",
            right:"0rem",
            transform:"translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
            }}
            aria-label="next">
          <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)"}}/>
        </Button>
        }
      </div>
    </div>
        
  );
};


export default Sectioncarousel