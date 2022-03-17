import React ,{useState} from 'react';
import slideData from './slideData.js';
import './slides.css';
import {FaArrowAltCircleLeft ,FaArrowAltCircleRight} from 'react-icons/fa';
const Slide =({slides}) =>{
    const [current ,setCurrent] =useState(0);
    let length = slides.length;

      const nextSlide = () =>{
          setCurrent(current === length - 1 ? 0:current + 1)
      };

      const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1: current - 1)
    };

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return(
        <div className="container">
            <FaArrowAltCircleLeft className='left'onClick={nextSlide} />
            < FaArrowAltCircleRight className='right' onClick={prevSlide} />
           {slideData.map((slide ,index) => {
               return (
                   <div className={index === current ?'slide active' :'slide'} key={index}>
                       {index=== current && (
                     <img src={slide.image} alt='Loading Error' key={index}  />
                       )}
                       </div>
               )  
           })}
        </div>
    )
}
export default Slide ;