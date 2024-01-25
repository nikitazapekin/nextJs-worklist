import React, { useEffect } from 'react';
import useSlide from '../../hooks/useSlide';
import SliderCarouselItemComponent from '../SliderCarouselItem/SliderCarouselItem';
import { useRef } from 'react';
import EE from "../../assets/ee.jpg"
import FD from "../../assets/fd.jpg"
import TT from "../../assets/tt.jpg"
import Slider1 from "../../assets/slider1.jpg"
import Slider2 from "../../assets/slider2.jpg"
import Slider3 from "../../assets/slider3.png"
import {
  SliderCarousel,
  SliderCarouselLeft,
  SliderCarouselRight,
  SliderCarouselWrapper,
  SliderDots,
  SliderDot
} from './SliderCarouselStyles';
const imgs= [Slider1, Slider2, Slider3]
const SliderCarouselComponent = () => {
  
  const { currentPosition, setCurrentPosition, currentSlide, setCurrentSlide } = useSlide();
const slider  =useRef<HTMLDivElement>()
  const handleClick = (direction: 'left' | 'right') => {
      if(  slider.current!=undefined){
    if (direction === 'left') {
      if(currentSlide==0){
        setCurrentSlide(2)
        setCurrentPosition(prev=>prev-slider.current.offsetWidth*2 ) //350
      }
      else {
setCurrentSlide(prev=>prev-1)
        setCurrentPosition(prev=>prev+slider.current.offsetWidth ) //350
      }
        } else {
          if(currentSlide!=2){

            setCurrentPosition(prev=>prev-slider.current.offsetWidth )
            setCurrentSlide(prev=>prev+1)
          }
          else{
            setCurrentPosition(0)
            setCurrentSlide(0)
          }
        }
    }
  };
   const handleDot = (index: number) => {
const pureWidthOfCarousel = slider.current.offsetWidth*2 
console.log("{ure" +pureWidthOfCarousel)
console.log("ind" +index)
setCurrentSlide(index)
setCurrentPosition( -slider.current.offsetWidth*index)
   }
  return (
      <SliderCarousel
      ref={slider}
      >
      <SliderCarouselWrapper
      currentPosition={String(currentPosition)}>
        {imgs.map((item, index) => (
          <SliderCarouselItemComponent 
          key={index} imageLink={item} />
        ))}
      </SliderCarouselWrapper>
      <SliderCarouselLeft onClick={() => handleClick('left')}>←</SliderCarouselLeft>
      <SliderCarouselRight onClick={() => handleClick('right')}>→</SliderCarouselRight>
      <SliderDots>
        {imgs.map((item, index) => (
          <SliderDot key={index}
         background={currentSlide==index ? "yellow" : "brown"}
          onClick={()=>handleDot(index)}
          >{index + 1}</SliderDot>
        ))}
      </SliderDots>
    </SliderCarousel>
  );
};

export default SliderCarouselComponent;
 



 