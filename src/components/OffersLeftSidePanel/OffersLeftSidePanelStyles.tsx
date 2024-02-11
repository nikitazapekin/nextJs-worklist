import styled from "styled-components";
export const OffersWrapper = styled.div`
width: 100%;
display: flex;
position: relative;
flex-direction: row;
max-height: 100vh;
`
interface OffersNavigationTypes {
    right: number
}

export const OffersNavigation = styled.div<OffersNavigationTypes>`
transition: 1.7s;
position: absolute;
width: 400px;
height: 100vh;
background-color: rgba(63, 63, 64);
z-index: 111;
left: ${props => -props.right}px;
`
interface IsHideSideBarTypes {
    left: number
}
export const IsHideSideBar = styled.div<IsHideSideBarTypes>`
width: 50px;
position:absolute;
height: 50px;
background-color: ${props=>props.left==0 ? "red" : "#fff"};
border: 3px solid black;
border-radius: 5px;
z-index: 1111;
top: 0;
transition: 0.7s;
right:${props => -props.left}px;
display: flex;
flex-direction: column;
gap: 10px;
padding: 5px;
justify-content: center;
align-items: center;
cursor: pointer;
`
interface SidebarLines  {
    isHide: boolean
}
export const IsHideSideBarLineFirst = styled.div<SidebarLines>`
width: 30px;
height: 4px;
background-color: black;
transition: 1.7s;
transform: ${props=>props.isHide != true ? `rotate(45deg) translateY(10px) translateX(10px)` : `rotate(0deg)`}
`
export const IsHideSideBarLineSecond = styled.div<SidebarLines>`
width: 30px;
height: 4px;
background-color: black;
transition: 1.7s;
opacity: ${props=>props.isHide != true ? `0` : `100`}%;
transform: ${props=>props.isHide != true ? `rotate(20deg)` : `rotate(0deg)`}
`
export const IsHideSideBarLineThird = styled.div<SidebarLines>`
width: 30px;
height: 4px;
background-color: black;
transition: 1.7s;
transform: ${props=>props.isHide != true ? `rotate(135deg) translateY(10px) translateX(-10px)` : `rotate(0deg)`}
`
export const ExistingOffers = styled.div`
position: relative;
width: 100%;
height: 100vh;
background-color: rgba(230, 232, 235);
`
export const OffersPanelBlock = styled.div`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
`
export const  OffersPanelBlockTitleWrapper = styled.div`
position: relative;
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`
export const OffersPanelBlockTitleImage = styled.img`
width: 40px;
height: 40px;
`
export const OffersPanelBlockTitle = styled.h1`
font-size: 36px;
color: #fff;
border-bottom: 2px solid #fff;
`
export const OffersNavigationBtn = styled.div`
cursor: pointer;
`
export const OffersSearchNavigationWrapper = styled.div`
width: 100%;
height: auto;
 padding: 10px;
`
export const OffersSearchNavigationItemTitle = styled.h2`
color: #fff;
`
export const OffersSearchNavigationItemInput = styled.input`
font-size: 22px;
width: 100%;
padding 30px;
height: 50px;
padding-left: 20px;
border: none;
outline: none;
border-radius: 10px;
cursor: pointer;
`
export const RangeSlider = styled.input`

`
export const RangeSliderValue = styled.h3`
color: #fff;
`
export const AddSkillBtn = styled.button`
width: 100%;
height: 50px;
background-color: gray;
border: none; 
outline: none;
color: #fff;
border-radius: 10px;
font-size: 22px;
cursor: pointer;
position: relative; 
top: 20px;
transition: 1s ease-in-out;
&:hover{
    letter-spacing: 2px;
background-color: red;
transform: scale(1.01);
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`
export const SkillsList = styled.div`
width: 100%;
height: auto;
position: relative;
display: flex;
gap: 20px;
flex-wrap: wrap;
justify-content: center;
`
export const SkillListItem = styled.div`
min-width: 100px;
padding: 5px;
width: auto; 
height: 60px;
background-color: rgba(71, 69, 69);
display: flex;
align-items: center;
justify-content: center;
border-radius: 20px;
position: relative;
gap: 10px;
`
export const SkillListItemTitle = styled.h2`

color: #fff;
font-size: 20px;
`
export const SkillListItemWrapper = styled.div`
min-width: 100px;
height: auto;
display: flex;
justify-content: center;
align-items: center;
`
export const SkillListItemImage = styled.img`
width: 30px;
height: 30px;
cursor: pointer;
`
export const LeftSidePanelSearchButton = styled.button`
width: 90%;
height: 60px;
color: #fff;
padding: 5px;
background-color: rgba(45, 46, 46);
cursor: pointer;
border: none;
outline: none;
border-radius: 20px;
font-size: 32px;
transition: 1s ease-in-out;
&:hover{
    letter-spacing: 2px;
background-color: red;
transform: scale(1.01);
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`
export const LeftSidePanelSearchButtonWrapper  = styled.div`
width: 90%;
position: relative;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
`
export const LeftSidePanelSearchButtonImage = styled.div`
wifth: 60px;
height: 60px;

`