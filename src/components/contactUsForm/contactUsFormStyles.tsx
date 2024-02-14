import styled from "styled-components";
export const ContactUsFormComponent = styled.div`
width: 100%;
margin: 0 auto;
position: relative;
height: 800px;
padding-left: 100px;
padding-right: 100px;
padding-top: 30px;
display: flex;
justify-content: space-between;
`
export const TelephoneInput = styled.input`
width: 100%;
heigth: 60px;
`
export const ContactUsFormImage = styled.img`
width: auto;
height: 100%;
`
export const  ContactUsFormBlock = styled.form`
width: 60%;
height: 100%;
display: flex;
align-items: center;
position: relative;
flex-direction: column;
padding: 20px;
`
//justify-content: center;
//align-items: center;
export const ContactUsFormBlockWrapper = styled.div`
width: 100%;
height: 60px;
position: relative;
`
//background-color: red;
export const ContactUsFormEmailWrapper = styled.div`
width: 100%;
height: auto;
position: relative;
`
export const ContactUsFormTitle =styled.h1`
color: #fff;
text-align: center;
 font-size: 40px;
`
export const ContactUsFormSubTitle =styled.h1`
color: #fff;
 font-size: 32px;
`
export const ContactUsFormBlockBackground = styled.div`
background-color: rgba(48, 48, 48);
width: 100%;
height: 100%;
position: absolute;
z-index: -1;
`
export const MessageTextarea = styled.textarea`
width: 100%;
height: 100%;
position: relative;
border: none;
outline: none;
border-radius: 20px;
min-height: 200px;
padding: 40px;
font-size: 20px;
cursor: pointer;
`
export const SendMessageButton = styled.div`
width: 100%;
height: auto;
padding: 20px;
border: none;
outline: none;
cursor: pointer;
border-radius: 10px;
background-color: rgba(102, 102, 102);
display: flex;
justify-content: center;
align-items: center;
font-size: 32px;
transition: 1s ease-in-out;
&:hover{
  letter-spacing: 2px;
background-color: rgba(133, 11, 3);
color: #fff;
transform: scale(1.01);
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

`