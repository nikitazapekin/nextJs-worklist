import styled, { keyframes }  from "styled-components";
export const CaptchaComponent = styled.div`
width: 90%;
height: auto;
display: flex
flex-direction:column;
`
export const CaptchaCodeForm = styled.div`
width: 300px;
height: 80px;
user-select: none;
margin: 0 auto;
position: relative; 
display: flex; 
align-items: center;

`

export const CaptchaCode = styled.div`
background-color: #fff;
width: 250px;
height: 80px;
display: flex;
gap: 10px;
justify-content: center;
align-items: center;

`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const CaptchaRefresh = styled.img`
width: 40px;
heightL 40px;
cursor: pointer;
position: absolute; 
right: 0;
cursor: pointer;
&:hover {
    animation: ${rotate} 1s linear infinite;  
  }
`
interface CaptchaProps  {
    fontSize: string, 
    fontWeight: string, 
    transformX: string;
} 
// font-size: ${props=>props.fontSize};
export const CaptchaSymbol = styled.div<CaptchaProps>`
transform: rotateZ(${props=>props.transformX});
font-weight: ${props=>props.fontWeight}; 
font-size: 32px;
text-decoration: line-through;
  `;
  export const RefreshWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: 20px
  `
  export const CaptchaInput = styled.input`
  width: 300px;
  border: none; 
  outline: none;
  height: 30px;
  padding-left: 20px;
   `
   interface CaptchaErrorProps {
    display: string
   }
   export const CaptchaError = styled.h2<CaptchaErrorProps>`
   color: red;
   display: ${props=>props.display};
position: absolute;
right: 0;
top: 0;
   `
/*
`${Math.floor((Math.random()*1000000))%360}deg` */