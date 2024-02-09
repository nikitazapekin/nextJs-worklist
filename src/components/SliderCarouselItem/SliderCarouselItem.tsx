import { SliderCarouselItem, SliderContentBlock, SliderContentBlockTitle, SliderImage } from "./SliderCarouselItemStyles";
interface SliderCarouselItemComponentProps {
    imageLink: string,
  //  isActive: boolean
}
const SliderCarouselItemComponent = ({imageLink}: SliderCarouselItemComponentProps) => {

    return (
        <SliderCarouselItem>   
<SliderImage  src={imageLink} /> 

<SliderContentBlock>
  <SliderContentBlockTitle>
    Titleeeee
  </SliderContentBlockTitle>
</SliderContentBlock>
        </SliderCarouselItem>
     );
}
 
export default SliderCarouselItemComponent; 

