import { useEffect, useState, useRef, memo } from "react";

import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import Modal from "../modal/modal";
import { AboutPersonal, AboutPersonalAvatarDraw, AvatarPersonalInput, AboutPersonalAvatarWrapper, AboutPersonalBlock, AboutPersonalDateOfRegister, AboutPersonalEducatiom, AboutPersonalForm, AboutPersonalFormInput, AboutPersonalFormSubWrapper, AboutPersonalFormTitle, AboutPersonalFormWrapper, AboutPersonalUsername, AvatarPersonal, SaveButton, PersonalForm, PersonalFormBackground, PersonalFormWrapper, PersonalNaBar, PersonalNavBarItem, YourPersonalData, ResumeWrapper, FileUploader, DragYourResume, ResumeDocumentElement, ResumeDocumentElementButtonWrapper, ResumeDocumentElementButton, ResumeDocumentElementTitle, AboutPersonalEducationInput, ErrorLog, AvatarPersonalWrapper, PersonalFormSubmit, AvatarPersonalDefault } from "./personalStyles";

import usePersonalInformation from "../../hooks/usePersonalInformation";
import Draw from "../../assets/draw.png"
import Trash from "../../assets/trash.png"
import useJwt from "../../hooks/useJwt";
import { fetchAvatarFunction } from "../../store/slices/setAvatar.slice";
import ModalWindow from "../modal/modal";
const PersonalData = memo(() => {
    const dispatch = useDispatch()
    const {jwtToken} =useJwt()
    const {handleChange, handleClearDocument, handleRemoveDocument, fileUploader, username, email, country, city, 
         handleSave,// handleAvatar, 
         handleChangeFile,
         telephone, RegistrationData, avatar, document, favouriteOffers, 
         experience, lastTimeAtNetwork, education, describtion } = usePersonalInformation()
  const [isClickedEducation, setIsClickedEducation] =useState<boolean>(false)
  const [isClickedAboutYourself, setIsClickedAboutYourself] =useState<boolean>(false)
  const logo = useRef(null)
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        const formData = new FormData(event.currentTarget);
        formData.append('jwtToken', jwtToken);
        const response = await axios.post(`http://localhost:5000/test?token=${jwtToken}`, formData);
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};


const [avatarSrc, setAvatarSrc] = useState('');
  useEffect(() => {
    const checkImageExists = async () => {
        try{
            const response = await fetch(`http://localhost:5000/worklist.com/getPersonalInformation/getAvatar?token=${jwtToken}`);
            if (response.ok) {
                setAvatarSrc(`http://localhost:5000/worklist.com/getPersonalInformation/getAvatar?token=${jwtToken}`);
            } else {
                setAvatarSrc("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgifiMlmwUfmgW5vpgz7_YA73mu7KFNiVsolT-sm8_7A&s");
            }
            } catch(e) {
                console.log(e)
      }
    };

    checkImageExists();
  }, [jwtToken]);
  const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <PersonalFormSubmit
         onSubmit={handleSubmit}
                method="POST" encType="multipart/form-data" 
        >
            <SaveButton 
             type="submit"
            onClick={(event)=>{
              
                 handleSave(event);
                 }}>
                Save
            </SaveButton>
            <AboutPersonal>
               <AvatarPersonalWrapper
               >
                <AvatarPersonalDefault 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA4LdzM-bNWY-M5ENlwAJ5UU4b96ZxFEGIAy_tOb9SJA&s"
                />
                <AvatarPersonal 
                 src={avatarSrc}
                />
                
                <AvatarPersonalInput 
                 type="file"
                 name="my-file"
                 accept="image/*"
ref={logo}
                 />
                 </AvatarPersonalWrapper> 
                <AboutPersonalDateOfRegister>{RegistrationData}</AboutPersonalDateOfRegister>
                <AboutPersonalBlock>
                    <AboutPersonalAvatarWrapper>
                        <AboutPersonalUsername>{username}</AboutPersonalUsername>
                    </AboutPersonalAvatarWrapper>
                    <AboutPersonalAvatarWrapper>
                        {isClickedEducation ? (
                            <AboutPersonalEducationInput placeholder="Type education" 
                            name="education"
                            onChange={(event)=>{ handleChange(event); }}
                            />
                        ) : (
                            <AboutPersonalEducatiom>Education: {education}</AboutPersonalEducatiom> 
                            )
                    }
                        <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"20px"}  onClick={()=>{ setIsClickedEducation(prev=>!prev); }}/>
                    </AboutPersonalAvatarWrapper>
                    <AboutPersonalAvatarWrapper>
                    {isClickedAboutYourself ? (
                            <AboutPersonalEducationInput name="about" placeholder="Type about yourself" 
                            onChange={(event)=>{ handleChange(event); }}/>
                            ) : (
                            <AboutPersonalEducatiom>About: {describtion}</AboutPersonalEducatiom>  
                            
                            )
                    }
                        <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"20px"} onClick={()=>{ setIsClickedAboutYourself(prev=>!prev); }}/>
                    </AboutPersonalAvatarWrapper>
                </AboutPersonalBlock>
            </AboutPersonal>
            <AboutPersonalForm>
                <YourPersonalData>Your personal data</YourPersonalData>
                <AboutPersonalFormWrapper>
                    <AboutPersonalFormTitle>
                        Experience
                    </AboutPersonalFormTitle>
                    <AboutPersonalFormSubWrapper>
                        <AboutPersonalFormInput placeholder="Type experience"
                        name="experience"
                        defaultValue={experience}
                        onChange={(event)=>{ handleChange(event); }}
                        />
                        <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"40px"} />
                    </AboutPersonalFormSubWrapper>
                </AboutPersonalFormWrapper>
                <AboutPersonalFormWrapper>
                    <AboutPersonalFormTitle>
                        Email
                    </AboutPersonalFormTitle>
                        <ErrorLog>Error</ErrorLog>
                    <AboutPersonalFormSubWrapper>
                        <AboutPersonalFormInput defaultValue={email} placeholder="Type email"
                        name="email"
                        onChange={(event)=>{ handleChange(event); }}
                        />
                        <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"40px"} />
                    </AboutPersonalFormSubWrapper>
                </AboutPersonalFormWrapper>
                <AboutPersonalFormWrapper>
                    <AboutPersonalFormTitle>
                        Password
                    </AboutPersonalFormTitle>
                    <ErrorLog>Error</ErrorLog>
                    <AboutPersonalFormSubWrapper>
                        <AboutPersonalFormInput defaultValue={""} placeholder="Type password" 
                        name="password"
                        onChange={(event)=>{ handleChange(event); }}
                        />
                        <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"40px"} />
                    </AboutPersonalFormSubWrapper>
                </AboutPersonalFormWrapper>
                <AboutPersonalFormWrapper>
                    <AboutPersonalFormTitle>
                        Telephone
                    </AboutPersonalFormTitle>
                    <AboutPersonalFormSubWrapper>
                        <AboutPersonalFormInput defaultValue={telephone} placeholder="Type telephone"
                        name="telephone"
                        onChange={(event)=>{ handleChange(event); }}
                        />
                        <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"40px"} />
                    </AboutPersonalFormSubWrapper>
                </AboutPersonalFormWrapper>
                <AboutPersonalFormWrapper>
                    <AboutPersonalFormTitle>
                        Country
                    </AboutPersonalFormTitle>
                    <AboutPersonalFormSubWrapper>
                        <AboutPersonalFormInput defaultValue={country} placeholder="Type country" 
                        name="country"
                        onChange={(event)=>{ handleChange(event); }}
                        />
                        <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"40px"} />
                    </AboutPersonalFormSubWrapper>
                </AboutPersonalFormWrapper>
                <AboutPersonalFormWrapper>
                    <AboutPersonalFormTitle>
                        City
                    </AboutPersonalFormTitle>
                    <AboutPersonalFormSubWrapper>
                        <AboutPersonalFormInput defaultValue={city} placeholder="Type city"
                        name="city"
                        onChange={(event)=>{ handleChange(event); }}
                        />
                        <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"40px"} />
                    </AboutPersonalFormSubWrapper>
                </AboutPersonalFormWrapper>
                <ResumeWrapper>
                    <DragYourResume>Your resume</DragYourResume>
                    <FileUploader
                        ref={fileUploader}
                        type="file" name="f" id="fileInput"
                        onChange={handleChangeFile}
                        placeholder="drag your resume"
                    />
                    {document!=""  && (
                        <ResumeDocumentElement>
                            <ResumeDocumentElementTitle
                                href={document }
                            >
                                {document }
                            </ResumeDocumentElementTitle>
                            <ResumeDocumentElementButtonWrapper>
                                <ResumeDocumentElementButton src={Trash}
                                onClick={handleRemoveDocument}
                                />
                            </ResumeDocumentElementButtonWrapper>
                        </ResumeDocumentElement>
                    )}
                </ResumeWrapper>
            </AboutPersonalForm>


      {/*  <ModalWindow  open={isOpen} //setIsOpen={setIsOpen} 
        onClose={() => setIsOpen(false)}>
        Contragulation! You have successfully changed your personal data!
                    </ModalWindow> */}
                    </PersonalFormSubmit>
        </>
    );
})
export default PersonalData;

