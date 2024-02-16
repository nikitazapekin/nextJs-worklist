import styled from 'styled-components';
interface StyledNavBarProps {
    background: string;
  }
export const  Navbar = styled.nav<StyledNavBarProps>`
width: 100%;
height: 70px;
flex-shrink: 0;
position: relative;
`;
export const NavBarWrapper =styled.div`
width: 100%;
display: flex;
flex-direction: row;
padding-left: 20px;
padding-right: 20px;
justify-content: space-between;
`
export const NavBarBackground = styled.div`
background-color: black;
position: absolute;
top: 0;
opacity: 0.8;
width: 100%;
height: 100%;
z-index: -1
`
 export const  NavBarItem =styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 color: #fff;
 cursor:pointer;
 font-weight: 800;
 position: relative;
 font-size: 22px;
 max-width: 700px;
 `
 export const NavBarItemSearch = styled.input`
 width: 100%;
 max-width: 700px;
 height: 40px;
 border: none;
 outline: none;
 cursor: pointer;
background-color: rgba(62, 63, 64);
border-radius: 10px;
padding: 4px;
padding-left: 10px;
position: relative;
color: #fff;
font-size: 23px;
 `
 export const  NavBarItems =styled.div`
 width:auto;
 height: 70px;
 display: flex;
 gap: 50px;
 margin-left: 20px;
 align-items: center;
 justify-content: space-between;
 `
 //line-height: 70px;
 export const SubNavBarItem =styled.div`
 color: #fff;
 cursor:pointer;
 font-weight: 800;
 font-size: 22px;
 white-space: nowrap;
 `

 export const FindUserItem = styled.div`
 width: 100%;
 height: 60px;
 background-color: rgba(58, 59, 58);
display: flex;
justify-content: center;
align-items: center;
 border-bottom: 2px solid black;
 `
 export const FindUserBlock = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 position: absolute;
 top: 70px;
 `