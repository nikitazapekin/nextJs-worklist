import styled from "styled-components";
export const ContactUsFormComponent = styled.form`
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
padding: 100px;
 gap: 10px;
 `
 export const ContactUsFormBlockWrapper = styled.div`
 border-radius: 20px;
width: 100%;
height: auto;
margin-top: 50px;
position: relative;
display: flex;
align-items: center;
`
export const BLockItemLine = styled.div`
width: 60%;
height: 4px;
background-color: orange;
`
//border-bottom: 3px solid orange;
//flex-direction: column;
//justify-content: flex-start;
//background-color: rgba(56, 56, 56);
//justify-content: center;
//background-color: red;
export const ContactUsFormEmailWrapper = styled.div`
width: 100%;
height: auto;
position: relative;
`
export const MessageBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
export const ContactUsFormTitle =styled.h1`
color: #fff;
margin: 0 auto;
font-size: 40px;
`
export const ContactUsFormSubTitle =styled.h2`
color: #fff;
 font-size: 28px;
 `
 export const ContactUsFormBlockBackground = styled.div`
background-color: rgba(48, 48, 48);
width: 100%;
height: 100%;
border-radius: 20px;
position: absolute;
z-index: -1;
`
export const MessageTextarea = styled.textarea`
min-height: 200px;
padding: 40px;
border: none;
outline: none;
cursor: pointer;
border-radius: 20px;
position: relative;
font-size: 20px;
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

export const SendMessageButtonSubmit = styled.button`
width: 100%;
height: auto;
padding: 20px;
background-color:white;
border: none;
outline: none;
text-align: center;
font-size: 32px;
border-radius: 20px;
cursor: pointer;
transition: 1s ease-in-out;
&:hover{
  letter-spacing: 2px;
background-color: rgba(133, 11, 3);
color: #fff;
transform: scale(1.01);
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

`