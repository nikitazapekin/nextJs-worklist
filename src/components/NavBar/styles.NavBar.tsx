import styled from 'styled-components';
interface StyledNavBarProps {
    background: string;
  }
export const  Navbar = styled.nav<StyledNavBarProps>`
width: 100%;
height: 70px;
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
 line-height: 70px;
 color: #fff;
 width: 200px;
 cursor:pointer;
 font-weight: 800;
 font-size: 22px;
 `
 export const  NavBarItems =styled.div`
 width:auto;
 display: flex;
 gap: 100px;
 justify-content: space-between;
 `
 export const SubNavBarItem =styled.div`
 
 line-height: 70px;
 color: #fff;
 width: auto;
 cursor:pointer;
 font-weight: 800;
 font-size: 22px;
 `