import styled from "styled-components";
export const SliderCarouselItem = styled.div`
height: 100vh;
background-color: red;
width: 100vw;
position: relative;
`
 
export const SliderImage = styled.img`
width: 100%;
height: 100vh;
filter: brightness(80%)
`


export const SliderContentBlock = styled.div`
width: 300px;
position: absolute;
z-index: 1223;
height: 300px;
padding: 20px;
background-color: rgba(40, 41, 40);
`
export const SliderContentBlockTitle  = styled.h1`
color: #fff;
font-size: 32px;
`