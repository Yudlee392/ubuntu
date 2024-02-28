import React from 'react'
import SectionCard from '../sectioncard/SectionCard';
import { Button } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { KeyboardArrowLeft } from '@mui/icons-material';


const Sectioncarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
      };
    const items = [1,1,1,1,1].map((item) => <SectionCard/>)
  return (
    <div className='relative px-4 lg:px-8'>
      <div className='relative p-5'>
    <AliceCarousel
        items={items}
        disableButtonsControls
        infinite
        responsive={responsive}
        />
        <Button variant="contained" className="z-50" sx={{position:'absolute', top:"8rem",right:"0rem",
       transform:"translateX(50%) rotate(90deg)"}} aria-label="next">
        <KeyboardArrowLeftIcon sx={{transform:"rotate(90deg)"}}/>
        </Button>
        </div>
        </div>
  );
}

export default Sectioncarousel