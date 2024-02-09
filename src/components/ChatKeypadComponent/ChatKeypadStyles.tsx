import styled from "styled-components"
export const ChatOfVacancy = styled.div`
width: 100%;
min-height: 400px;
position: relative;
background-color: rgba(36, 36, 35);
border-radius: 20px;
`
export const ChatKeypad = styled.div`
position: absolute;
bottom: 0;
width: 100%;
height: auto;
padding: 10px;
background-color: rgba(71, 71, 69);
border-radius: 0 0 20px 20px; 
display: flex;
justify-content: center;
gap: 10px;
align-items: center; 
`
export const ChatInput = styled.input`
 width: 80%;
 height: 50px;
 border: none;
 outline: none;
 cursor: pointer;
 padding: 10px;
 border-radius: 20px;
 font-size: 32px;
 `
export const ChatSmiley = styled.div`
 width: 50px;
 height: 50px;
 cursor: pointer;
 border: 3px solid black;
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: #fff;
 `
export const ChatSmileyImage = styled.img`
 width: 50px;
 height: 50px;
 `
export const ChatSendImage = styled.img`
 width: 30px;
 height: 30px;
margin-right:  5px;
 `
export const ChatMessage = styled.div`
 width: 100%;
 height: auto;
 padding: 20px;
 background-color: rgba(117, 117, 117);
 border-bottom: 2px solid black;
 position: relative;
 display: flex;
 gap: 10px;
 align-items: center;
 `
export const ChatWrapper = styled.div`
 width: 100%;
 height: 100%;
 background-color: rgba(133, 132, 130); 
 position: absolute;
 border-radius: 0 0 20px 20px; 
 overflow-y: scroll;
 `
export const UserAvatar = styled.div`
 width: 70px;
 height: 70px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
 `
export const UserAvatarImage = styled.img`
 width: 100%;
 height: 100%;
 border-radius: 50%;
 `
export const ChatBlock = styled.div`
 display: flex;
 position: relative;
 flex-direction: column;
 `
export const ChatUsername = styled.h1`
 color: #fff;
 `
export const ChatMessageText = styled.h2`
 color: #fff;
 `