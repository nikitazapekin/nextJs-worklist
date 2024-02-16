import styled from "styled-components"
export const RegisterFormComponent = styled.div`
width: 80%;
height:auto;
position: relative;
margin: 0 auto;
top: 100px;
border-radius: 20px;
padding-top: 100px;
padding-bottom: 100px;
margin-bottom: 150px;
`
export const RegisterFormWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
align-items: center;
padding: 30px;
 gap: 30px;
`
export const RegisterFormBaccground = styled.div`
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
export const RegisterComponentTitle = styled.div`
  font-size: 40px;
 
font-weight: 800;
color: #fff;

`
export const RegisterFormInputWrapper = styled.div`
width: 90%;
padding 30px;
height: 90px;
position: relative;
`
export const RegisterFormInputUsername = styled.input`
font-size: 22px;
width: 100%;
padding 30px;
height: 50px;
padding-left: 20px;
border: none;
outline: none;
cursor: pointer;
`
export const RegisterFormInputMarkdown = styled.h2`
color: #fff;
font-weight: 700;
`
export const RegisterFormSubmit = styled.button`
width: 90%;
height: 70px;
border-radius: 20px;
cursor: pointer;
background-color: gray;
display: flex;
justify-content: center; 
align-items: center;
font-size: 32px;
font-weight: 900;
transition: 1s ease-in-out;
&:hover{
  letter-spacing: 2px;
background-color: rgba(133, 11, 3);
color: #fff;
transform: scale(1.01);
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`
export const OrHaveAnAccount = styled.h2`
color: #fff;
cursor: pointer;

`
interface ErrorLoginProps {
  display: string
}
export const ErrorLogin = styled.h1<ErrorLoginProps>`
color: red;
font-size: 32px;
display: ${props => props.display}
`
export const ErrorRegisterInformation = styled.h2`
color: red;
position: absolute;
right: 0;
top: 0;
`
export const RegisterIcon = styled.img`
width: 30px;
height: 30px;
position: absolute;
 right: 0;
 top: 35px;
 margin-right: 10px;
`