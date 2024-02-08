import React, { useEffect , useRef } from 'react';

import {
  SliderCarousel,
  SliderCarouselLeft,
  SliderCarouselRight,
  SliderCarouselWrapper,
  SliderDots,
  SliderDot
} from './SliderCarouselStyles';

import useSlide from '../../hooks/useSlide';
import SliderCarouselItemComponent from '../SliderCarouselItem/SliderCarouselItem';
import Slider1 from "../../assets/slider1.jpg"
import Slider2 from "../../assets/slider2.jpg"
import Slider3 from "../../assets/slider3.png"

const imgs = [Slider1, Slider2, Slider3]
const SliderCarouselComponent = () => {
  const { currentPosition, setCurrentPosition, currentSlide, setCurrentSlide, handleClick, handleDot, slider } = useSlide();

const sld=useRef(null)
  useEffect(() => {
    let isDown = false;
    let startX =0;
    let scrollLeft=0;

    const handleMouseDown = (e: any) => {
      isDown = true;
      startX = e.pageX - slider.current.offsetLeft;
      scrollLeft = sld.current.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e: any) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.current.offsetLeft;
      const SCROLL_SPEED = 3;
      const walk = (x - startX) * SCROLL_SPEED;
      sld.current.scrollLeft = scrollLeft - walk;
    };
// if(sld.current!=undefined){
    sld.current.addEventListener('mousedown', handleMouseDown);
    sld.current.addEventListener('mouseleave', handleMouseLeave);
    sld.current.addEventListener('mouseup', handleMouseUp);
    sld.current.addEventListener('mousemove', handleMouseMove);
// }
    return () => {
       // if(sld.current!=undefined){
    /*  sld.current.removeEventListener('mousedown', handleMouseDown);
      sld.current.removeEventListener('mouseleave', handleMouseLeave);
      sld.current.removeEventListener('mouseup', handleMouseUp);
      sld.current.removeEventListener('mousemove', handleMouseMove); */
      //  }
    }; 
  }, []);

  return (
    <SliderCarousel
      ref={slider}
    >
      <SliderCarouselWrapper
      ref={sld}
        currentPosition={String(currentPosition)}>
        {imgs.map((item, index) => (
          <SliderCarouselItemComponent
            key={index} imageLink={item} />
        ))}
      </SliderCarouselWrapper>
      <SliderCarouselLeft onClick={() => { handleClick('left'); }}>←</SliderCarouselLeft>
      <SliderCarouselRight onClick={() => { handleClick('right'); }}>→</SliderCarouselRight>
      <SliderDots>
        {imgs.map((item, index) => (
          <SliderDot key={index}
            background={currentSlide == index ? "yellow" : "brown"}
            onClick={() => { handleDot(index); }}
          >{index + 1}</SliderDot>
        ))}
      </SliderDots>
    </SliderCarousel>
  );
};

export default SliderCarouselComponent;


/*

 useEffect(() => {
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.current.classList.add('activeSlide');
      startX = e.pageX - slider.current.offsetLeft;
      scrollLeft = slider.current.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.current.classList.remove('activeSlide');
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.current.classList.remove('activeSlide');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.current.offsetLeft;
      const SCROLL_SPEED = 3;
      const walk = (x - startX) * SCROLL_SPEED;
      slider.current.scrollLeft = scrollLeft - walk;
    };
if(slider.current!=undefined){
    slider.current.addEventListener('mousedown', handleMouseDown);
    slider.current.addEventListener('mouseleave', handleMouseLeave);
    slider.current.addEventListener('mouseup', handleMouseUp);
    slider.current.addEventListener('mousemove', handleMouseMove);
}
    return () => {
        if(slider.current!=undefined){
      slider.current.removeEventListener('mousedown', handleMouseDown);
      slider.current.removeEventListener('mouseleave', handleMouseLeave);
      slider.current.removeEventListener('mouseup', handleMouseUp);
      slider.current.removeEventListener('mousemove', handleMouseMove);
        }
    };
  }, []);
  */