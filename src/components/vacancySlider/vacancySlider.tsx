import { useEffect, useRef, useState } from "react";
import { VacanctSliderLeft, VacanctSliderRight, VacancySliderCarousel, VacancySliderComponent, VacancySliderItem, VacancySliderItemImage } from "./vacancySliderStyles";
interface VacancySliderTypes {
    images: String[]
}

const VacancySlider = ({images}: VacancySliderTypes) => {
    const slider= useRef(null)
    const [sliderWidth, setSliderWidth] = useState(0)
    const [scrollValue,  setScrollValue] =useState(0)
    const [amountOfSlides, setAmountOfSlides] = useState(images.length)
    const [currectSlide, setCurrentSlide] = useState(0)
    const [animate, setAnimate] = useState(false);
    const handleScroll = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = event.target as HTMLElement;
        setAnimate(true);
        setTimeout(() => setAnimate(false), 2000);
        if( target.dataset.name === "right") {
            if(currectSlide!=amountOfSlides-1) {
                setScrollValue(prev => prev - sliderWidth)     
                setCurrentSlide(prev=>prev+1)
            } else{
                setScrollValue(prev => prev + sliderWidth*currectSlide)     
                setCurrentSlide(0)
            }
        }
        else {
            if(currectSlide>0){
                setScrollValue(prev => prev + sliderWidth);
                setCurrentSlide(prev=>prev-1)
            }
            else {
                setCurrentSlide(amountOfSlides-1)
                setScrollValue(prev=> prev-sliderWidth*(amountOfSlides-1))
            }
        }
    }
    useEffect(()=> {
setSliderWidth(slider.current.offsetWidth)
    }, [slider])
    return ( 
      <VacancySliderComponent
      ref={slider}
      >
        <VacanctSliderLeft
          onClick={(event)=>handleScroll(event)}
        data-name="left"
        >⬅</VacanctSliderLeft>
        <VacanctSliderRight
        data-name="right"
        onClick={(event)=>handleScroll(event)}
        >⮕</VacanctSliderRight>
        <VacancySliderCarousel
        left={scrollValue}
        animate={animate}
        >
        {images.map((item)=> (
            <VacancySliderItem>
             <VacancySliderItemImage src={`http://localhost:5000/worklist.com/image?title=${item}`} alt="item" />
            </VacancySliderItem>
        ))}
        </VacancySliderCarousel>
      </VacancySliderComponent>
     );
}
 
export default VacancySlider;

/*
  const handleNavigate = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
setCurrentPagePersonal((event.target as HTMLElement).dataset.name)
  }
*/