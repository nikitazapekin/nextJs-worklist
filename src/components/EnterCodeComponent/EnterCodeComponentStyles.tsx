import styled from "styled-components";
export const  TypeCodeForm =styled.div`
width: 80%;
height:auto;
position: relative;
margin: 0 auto;
top: 100px;
border-radius: 20px;
padding-top: 100px;
padding-bottom: 100px;
display: flex;
flex-direction: column;
gap: 50px
`
export  const TypeCodeBaccground = styled.div`
width: 100%;
height: 100%;
background-color: black;
 opacity: 0.7;
 position: absolute;
 left: 0;
  top: 0;
  z-index: -1;
  border-radius: 20px;
  `
export const TypeCodeThatWasSendedOnYourEmail = styled.h1`
color: #fff;
text-align: center
`
export const TypeCodeInput = styled.input`
width: 100px;
height: 200px;
border:none;
outline: none;
border-radius: 20px;
font-size: 92px;
text-align: center;
`
export const TypeCodeInputLine = styled.div`
display: flex;
justify-content: center;
gap: 20px;

`
export const TypeCodeSubmit = styled.button`
width: 90%;
height: 70px;
background-color: gray;
margin: 0 auto;
cursor: pointer;
font-size: 32px;
font-weight: 900;
border: none;
outline: none;
border-radius: 20px;
`