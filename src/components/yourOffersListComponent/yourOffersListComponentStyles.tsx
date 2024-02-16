import styled from "styled-components";
export const YourOffers = styled.div`
width: 80%;
height: 70vh;
position: relative;
min-height: 50vh;
margin: 0 auto;
background-color: rgba(47, 48, 48);
top: 50px;
display: flex;
flex-direction: column;
border-radius: 20px;
gap: 50px;
margin-bottom: 100px;
overflow-y: scroll;
`
export const YourOffersTitle  = styled.h1`
color: #fff;
padding-top: 50px;
padding-left: 50px;
font-size: 43px
`
export const YourOffersList = styled.div`
width: 100%;
height: auto;
position: relative;
`
export const YourOffersElement = styled.div`
width: 100%;
height: 70px;
border-bottom: 3px solid black;
display: flex;
align-items: center;
background-color: rgba(36, 36, 36);
justify-content: space-between;
padding-left: 20px;
padding-right: 20px;
color: #fff;
font-size: 27px;
cursor: pointer;

`
export const YourOffersElementInformation = styled.div`

`
export const YourOffersElementTrashWrapper = styled.div`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
position: relative;
cursor: pointer;
z-index: 123;
align-items: center;
`
export const YourOffersElementTrash = styled.img`
width: 100%;
height: 100%;
`
//filter: brightness(80%)