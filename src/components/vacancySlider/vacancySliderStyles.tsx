import styled from "styled-components";
export const VacancySliderComponent = styled.div`
position: relative;
width: 100%;
height:600px;
background-color: red;
display: flex;
overflow-x: scroll;
`
interface SliderCarouselProps {
    left: number
}
export const VacancySliderCarousel = styled.div<SliderCarouselProps>`
 position: absolute;
display: flex;
left: ${props=>props.left}px;
flex-direction: row;
width: 100%;
`
export const VacancySliderItem = styled.div`
min-width: 100%;
width: 100%;
height: 600px;
background-color: orange;
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
background-color: brown;
z-index: 123;
cursor: pointer;
`

export const VacanctSliderRight = styled.button `
width: 100px;
height: 600px;
position: absolute;
right: 0;
background-color: brown;
z-index: 123;
cursor: pointer;
`