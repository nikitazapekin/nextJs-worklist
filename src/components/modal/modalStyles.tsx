import styled from "styled-components"
export const Modal = styled.div`
width: 30%;
height: 60%;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #FFF;
padding: 0px;
z-index: 1011;
border-radius: 20px;
`
export const ModalWrapper = styled.div`
padding: 40px;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
margin-bottom: 10px;
`
export const ModalButton = styled.button`
width: 100%;
heigth:auto;
padding: 30px;
border: none;
outline: none;
font-size: 32px;
cursor: pointer;
border-radius: 20px;
transition: 1s ease-in-out;
margin-bottom: 20px;
&:hover{
    letter-spacing: 2px;
  background-color: rgba(4, 209, 69);
  color: #fff;
  transform: scale(1.01);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`
export const  OverlayStyles = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, .7);
z-index: 1000;
`
export const ModalHeader = styled.div`
position: relative;
width: 100%;
height: 50%;
background-color: rgba(4, 209, 69);
border-radius: 20px 20px 0px 0px; 
display: flex;
align-items: center;
justify-content: center;
`
export const ModalHeaderImage =styled.img`
width: 50%;
height: 50%;
`
export const ModalTextBlock = styled.div`
font-weight: 800;
font-size: 32px;
text-align: center;
`
export const ModalContentWrapper = styled.div`
padding: 20px;
`