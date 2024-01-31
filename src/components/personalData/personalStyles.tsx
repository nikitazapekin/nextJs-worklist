import styled from "styled-components";
export const PersonalForm= styled.div`
width: 100%;
min-height: 100vh;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
`
export const PersonalFormBackground = styled.div`
position: absolute;
left: 0;
top: 0;
z-index: -1;
background-color: rgba(83, 87, 84);
width: 100%;
height: 100%;
`
//height: auto;

export const PersonalFormWrapper = styled.div`
position: relative;
border-radius: 20px;
z-index: 1;
background-color: rgba(49, 51, 50);
width: 90%;
display: flex;
flex-direction: column;
 margin-top: 50px;
overflow-y: scroll;
min-height: 100vh;

`
export const  SaveButton = styled.button`
width: 90%;
height: 80px;
color: #fff;
cursor: pointer;
background-color: gray;
outline: none;
border: none;
border-radius: 20px;
position: absolute;
left: 50%;
transform: translateX(-50%);
bottom: 0;
font-size: 34px;
font-weight: 900;
margin-bottom: 10px;
`
export const PersonalNaBar = styled.div`
display: flex;
color: #fff;
gap: 20px;
justify-content: flex-end;
padding: 20px;
`
export const AboutPersonalEducatiom = styled.h3`
color: #fff;
white-space: wrap;
positition: relative;
`
export const AboutPersonalAvatarWrapper= styled.div`
width: auto;
padding-top: 15px;
height: auto;
 white-space: wrap;
position: relative;
display: flex;
`

interface AboutPersonalAvatarDrawProps {
    size: string
}
export const AboutPersonalAvatarDraw = styled.img<AboutPersonalAvatarDrawProps>`
width: ${props=>props.size};
height: ${props=>props.size};
cursor: pointer;
position: relative; 
margin-left: 10px;
right: 0;
`
export const AboutPersonalInput = styled.input`

`
export const AboutPersonalBlock =  styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
width: auto;
`
//background-color: orange
//gap: 10px;
export const PersonalNavBarItem =styled.div`
font-size: 32px;
cursor: pointer;
 &:hover {
    color: red;
    border-bottom: 2px solid red;
}
`
export const AboutPersonal = styled.div`
width: 90%;
display: flex;
margin: 0 auto;
position: relative;
`
export const AvatarPersonal = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
cursor: pointer;
`
export const AboutPersonalUsername = styled.h1`
color: #fff;
`
export const AboutPersonalDateOfRegister = styled.h1`
color: #fff;
position: absolute; 
right: 0;
`
export const AboutPersonalForm = styled.div`
width: 90%;
margin: 0 auto;
display: flex;
flex-direction: column;
position: relative;
top: 50px;
gap: 50px;

margin-bottom: 150px;
`
export const AboutPersonalFormWrapper = styled.div`
height: 70px;
width: 100%;
border-radius: 20px;
display: flex;
flex-direction: column;
margin-bottom: 20px;
`
export const AboutPersonalFormTitle = styled.h1`
color: #fff;
` 
//background-color: transparent;
export const AboutPersonalFormInput = styled.input`
background-color: rgba(66, 65, 65);
width: 90%;
cursor: pointer;
border: none;
outline: none;
font-size: 32px;
padding: 10px;
border-radius: 10px;
`
export const YourPersonalData = styled.h1`
color: #fff;

`
export const AboutPersonalFormSubWrapper = styled.div`
width: 100%;
height: 100px;
`


export const ResumeWrapper = styled.div`
width: 100%
height: auto;
display: flex;
 position: relative;
 margin: 0 auto;
flex-direction: column;
`
export const FileUploader = styled.input`
width: 100%;
height: 200px;
background-color: rgba(66, 65, 65);
cursor: pointer;
border-radius:10px;
border: none;
outline: none;
text-align: center;
font-size: 60px;

`
export const DragYourResume = styled.h1`
color: #fff;
`