import styled from "styled-components";
export const OffersWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
`
export const OffersNavigation = styled.div`
position: relative;
width: 400px;
height: 100vh;
background-color: rgba(63, 63, 64);
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
export const OffersPanelBlockTitle = styled.h1`
font-size: 36px;
color: #fff;
border-bottom: 2px solid #fff;
`
export const OffersNavigationBtn  = styled.div`
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
`
export const SkillsList= styled.div`
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