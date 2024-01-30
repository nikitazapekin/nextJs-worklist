import styled from "styled-components";
export const PersonalForm= styled.div`
width: 100%;
height: 100vh;
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
export const PersonalFormWrapper = styled.div`
position: relative;
border-radius: 20px;
z-index: 1;
background-color: rgba(49, 51, 50);
width: 90%;
height: 600px;

`
export const  LogoutButton = styled.button`
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