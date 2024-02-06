import styled from "styled-components";
export const SliderCarousel = styled.div`
position: relative;
width: 100vw;
height: 100vh;
margin: 0 auto;
border: 3px solid black;
overflow:  hidden;
`
 
interface SliderCarouselWrapperProps {
    currentPosition: string
}
export const SliderCarouselWrapper = styled.div<SliderCarouselWrapperProps>`
display: flex;
position: absolute;
transition: 0.6s;
left: ${(props) => props.currentPosition}px
 
`
export const SliderCarouselLeft = styled.button`
height: 100vh;
width: 100px;
background-color: brown;
 cursor: pointer;
 position: absolute;
 z-index: 2;
 top: 0;
left: 0;
font-weight: 900;
font-size: 70px
`
export const SliderCarouselRight = styled.button`
height: 100vh;
width: 100px;
background-color: brown;
 cursor: pointer;
 position: absolute;
 z-index: 2;
right: 0;
top: 0;
font-weight: 900;
font-size: 70px

`
export const SliderDots = styled.div`
display: flex;
position: absolute;
bottom: 0;
z-index: 2;
left: 50%;
transform: translateX(-50%);
gap: 20px
`
interface DotsProps {
   background: string
}
export const SliderDot = styled.button<DotsProps>`
border: 2px solid black;
cursor: pointer;
color: #fff;
padding: 20px;
font-size:40px;
font-weight: 900;
border: none;
border-radius: 20px;
background-color: ${(props) => props.background};
`
// background-color: brown;
// ${(props) => props.currentPosition}