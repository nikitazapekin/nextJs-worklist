import { useNavigate } from "react-router-dom";
import { AboutPersonal, AboutPersonalAvatarDraw, AboutPersonalAvatarWrapper, AboutPersonalBlock, AboutPersonalDateOfRegister, AboutPersonalEducatiom, AboutPersonalForm, AboutPersonalFormInput, AboutPersonalFormSubWrapper, AboutPersonalFormTitle, AboutPersonalFormWrapper, AboutPersonalUsername, AvatarPersonal, SaveButton, PersonalForm, PersonalFormBackground, PersonalFormWrapper, PersonalNaBar, PersonalNavBarItem, YourPersonalData, ResumeWrapper, FileUploader, DragYourResume } from "./personalPageFormStyles";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import useJwt from "../../hooks/useJwt";
import { fetchPersonalInformationFunction } from "../../store/slices/person.slice";
import usePersonalInformation from "../../hooks/usePersonalInformation";
import PersonalData from "../personalData/personalData";
const PersonalPageForm = () => {
  const dispatch = useDispatch()
  const {jwtToken} = useJwt()
  const {handleLogout} =usePersonalInformation()
  useEffect(() => {
    const token = jwtToken
    if (token != null && token.length > 1) {
      dispatch(fetchPersonalInformationFunction({ token }))
    }
  }, [jwtToken])
  const handleNavigate = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

console.log((event.target as HTMLElement).dataset.name);

  }
  return (
    <PersonalForm>
 
      <PersonalFormWrapper>
<PersonalNaBar> 
<PersonalNavBarItem onClick={(event)=> handleNavigate(event)} data-name="data">Your data</PersonalNavBarItem>
<PersonalNavBarItem onClick={(event)=> handleNavigate(event)} data-name="job">Your job offers</PersonalNavBarItem>
<PersonalNavBarItem onClick={(event)=> handleNavigate(event)} data-name="chats">Chats</PersonalNavBarItem>
<PersonalNavBarItem
 onClick={handleLogout}
>Log out</PersonalNavBarItem>
</PersonalNaBar>



<PersonalData />

      </PersonalFormWrapper>
      <PersonalFormBackground />
    </PersonalForm>
  );
}

export default PersonalPageForm;

