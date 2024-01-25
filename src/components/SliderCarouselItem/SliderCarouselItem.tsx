import { SliderCarouselItem, SliderImage } from "./SliderCarouselItemStyles";
interface SliderCarouselItemComponentProps {
    imageLink: string,
  //  isActive: boolean
}
const SliderCarouselItemComponent = ({imageLink}: SliderCarouselItemComponentProps) => {

    return (
        <SliderCarouselItem>   
<SliderImage  src={imageLink} /> 
        </SliderCarouselItem>
     );
}
 
export default SliderCarouselItemComponent; 

/*

import { SliderCarouselItem, SliderImage } from "./SliderCarouselItemStyles";
interface SliderCarouselItemComponentProps {
    imageLink: string;
  }
  import { forwardRef } from "react";
  const SliderCarouselItemComponent =  forwardRef<HTMLDivElement, SliderCarouselItemComponentProps>(
    ({ imageLink }, ref) => {
      return (
        <SliderCarouselItem ref={ref}>
          <SliderImage src={imageLink} />
        </SliderCarouselItem>
      );
    }
  );
  
  export default SliderCarouselItemComponent; */