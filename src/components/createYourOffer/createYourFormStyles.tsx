import styled from "styled-components";

export const CreateYourOffer = styled.div`
width: 100%;
height: 100vh;
padding: 100px;
`
export const CreateYourOfferTitle = styled.h1`
color: #fff;
font-size: 50px;

`
export const TitleBlock = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const SeeListOfYourOffers = styled.h3`
color: #fff;
font-size: 30px;
cursor: pointer;
`
export const CreateYourOfferForm = styled.form`
display: flex;
flex-direction: column;
height: auto;
width: 100%;
margin-top: 100px;
gap: 50px;
`
export const InputBlockWrapper = styled.div`
width: 100%;
height: auto;
position: relative;
display: flex;
flex-direction: column;
`
export  const  InputBlockTitle = styled.h2`
color: #fff;
font-size: 40px;

`
export const InputCreateOffer = styled.input`
background-color: rgba(66, 65, 65);
width: 90%;
cursor: pointer;
border: none;
outline: none;
font-size: 32px;
padding: 10px;
border-radius: 10px;
`
export const SelectOption = styled.select`
background-color: rgba(66, 65, 65);
width: 90%;
cursor: pointer;
border: none;
outline: none;
font-size: 32px;
padding: 10px;
border-radius: 10px;
`

export const SelectOptionElement = styled.option`
background-color: rgba(66, 65, 65);
width: 90%;
cursor: pointer;
border: none;
height: 40px;
outline: none;
font-size: 32px;
padding: 10px;
border-radius: 10px;
`
export const InputCreateOfferWrapper = styled.div`
display: flex;
`
export const  SaveButton = styled.button`
width: 100%;
height: 80px;
color: #fff;
cursor: pointer;
background-color: gray;
outline: none;
border: none;
border-radius: 20px;
left: 50%;
font-size: 34px;
font-weight: 900;

transition: 1s ease-in-out;
&:hover{
    letter-spacing: 2px;
background-color: orange;
transform: scale(1.01);
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
`
export const FormImage = styled.img`
width: 40px;
height: 40px;
position: absolute;
right: 0;
`
export const FormError = styled.h1`
color: red;
padding-right: 150px;
position: absolute; 
right: 0;
`
export const ListOfSkills = styled.div`
width: 100%;
height: auto;
position: relative;
display: flex;
gap: 20px;
flex-wrap: wrap
`
export const AddSkillBtn = styled.button`
width: 90%;
height: 60px;
cursor: pointer;
border: none; 
outline: none;
border-radius: 20px;
margin-top: 10px;
cursor: pointer;
background-color: gray;
font-size: 32px;
`

export const SkillElement = styled.div`
width: auto;
padding: 20px;
border-radius: 20px;
background-color: rgba(71, 71, 70);
max-width: 500px;
display: flex;
align-items: center;
margin-bottom: 20px;
`
export const SkillElementTitle= styled.div`
font-weight: 800;
font-size: 25px;

`
export const SkillElementButtonWrapper = styled.div`
width: 40px;
height: 40px;
cursor: pointer;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
export const SkillElementButtonTrash=styled.img`
width: 40px;
height: 40px;
`
