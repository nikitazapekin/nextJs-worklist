import styled from "styled-components";
export const UsersMenu = styled.div`
position: relative;
width: 400px;
height: 850px;
background-color: rgba( 64, 63, 62)
`
export const User=styled.div`
width: 100%;
height: 60px;
background-color:  rgba(54, 54, 54);
position: relative;
border-bottom: 2px solid black;
display: flex;
align-items: center;
padding: 5px;
cursor: pointer;
gap: 5px;
`
export const UserLogo = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
export  const UserWrapper = styled.div`
display: flex;
 flex-direction: column;
`
export const UserUsername = styled.h2`
color: #fff;
`
export const UserLastMessage = styled.h3`
color: #fff;

`
export const UserTitleWrapper = styled.div`
display: flex;
align-items: center;
gap: 5px;
`
export const IsUserOnline = styled.div`

width: 10px;
height: 10px;
border-radius: 50%;
background-color: rgba(18, 219, 71);
`