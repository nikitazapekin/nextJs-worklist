import { useEffect, useRef, useState } from "react";
import { VacanctSliderLeft, VacanctSliderRight, VacancySliderCarousel, VacancySliderComponent, VacancySliderItem, VacancySliderItemImage } from "./vacancySliderStyles";
interface VacancySliderTypes {
    images: String[]
}
const VacancySlider = ({images}: VacancySliderTypes) => {
    const slider= useRef(null)
    const [sliderWidth, setSliderComponent] = useState(0)
    useEffect(()=> {
console.log("WIDTG"+slider.current.offsetWidth)
    }, [slider])
    return ( 
      <VacancySliderComponent
      ref={slider}
      >
        <VacanctSliderLeft>Left</VacanctSliderLeft>
        <VacanctSliderRight>Rigth</VacanctSliderRight>
        <VacancySliderCarousel
        left={sliderWidth}
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