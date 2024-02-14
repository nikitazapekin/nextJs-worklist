import styled,  { keyframes , css  } from "styled-components";
export const VacancySliderComponent = styled.div`
position: relative;
width: 100%;
height:600px;
display: flex;
overflow: hidden;
background-color: rgba(71, 69, 69);
border-radius: 20px;
`
interface SliderCarouselProps {
    left: number,
    animate: boolean
}
const brightnessAnimation = keyframes`
  0% {
    filter: brightness(100%);
  }
  50% {
    filter: brightness(50%);
  }
  100% {
    filter: brightness(100%);
  }
`;
interface SliderCarouselProps {
  left: number;
  animate: boolean;
}

export const VacancySliderCarousel = styled.div<SliderCarouselProps>`
  position: absolute;
  display: flex;
  left: ${props => props.left}px;
  flex-direction: row;
  transition: 1s ease-in-out;
  width: 100%;
  filter: brightness(100%);
  ${props =>
    props.animate &&
    css`
      animation: ${brightnessAnimation} 1s ease-in-out;
    `}
`;
export const VacancySliderItem = styled.div`
min-width: 100%;
width: 100%;
height: 600px;
border: 3px solid black;
`
export  const VacancySliderItemImage = styled.img`
width: 100%;
height: 600px;
`
export const VacanctSliderLeft = styled.button `
width: 100px;
height: 600px;
position: absolute;
left: 0;
background-color: rgba(31, 30, 29);
z-index: 123;
cursor: pointer;
color: #fff;
font-size: 43px;
border: none;
outline: none;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px; 
`
export const VacanctSliderRight = styled.button `
width: 100px;
height: 600px;
position: absolute;
right: 0;
background-color: rgba(31, 30, 29);
z-index: 123;
cursor: pointer;
color: #fff;
font-size: 43px;
border: none;
outline: none;
border-top-right-radius: 10px; 
border-bottom-right-radius: 10px;  

`