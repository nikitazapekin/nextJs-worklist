import styled from "styled-components";
export const Chat= styled.div`
width: 100%;
height: 100vh;
overflow-y: hidden;
background-color:rgba(72, 74, 72);
`
export const ChatWrapper = styled.div`
padding: 0px;
`
export const ChatNavBar = styled.nav`
width: 100%;
height: 60px;
display: flex;
align-items: center;
padding-right: 20px;
padding-left: 20px;
justify-content: center;
gap: 100px;
border-bottom: 3px solid black;
`
export const ChatNavBarSearchWrapper = styled.div`
width: 60%;
height: 60px;
position: relative;
display: flex; 
align-items: center;
`
 
export const ChatNavBarSearch = styled.input`
border-radius: 25px;
border: none;
outline: none;
width: 100%;
height: 50px;
font-size: 32px;
padding-left: 20px;
`
export const ChatNavBarItem = styled.h2`
color: #fff;
cursor: pointer;
line-height: 60px;
padding-right: 50px;
white-space: nowrap;
position: relative;
`
export const SearchWrapper = styled.div`
width: 50px;
height: 50px;
position: absolute;
border: 3px solid black;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
cursor: pointer;
right: 0;
`
export const SearchImage = styled.img`
width: 30px;
height: 30px;
position: absolute;
`
/*
 */