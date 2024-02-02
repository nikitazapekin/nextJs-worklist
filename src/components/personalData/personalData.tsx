import { AboutPersonal, AboutPersonalAvatarDraw, AvatarPersonalInput, AboutPersonalAvatarWrapper, AboutPersonalBlock, AboutPersonalDateOfRegister, AboutPersonalEducatiom, AboutPersonalForm, AboutPersonalFormInput, AboutPersonalFormSubWrapper, AboutPersonalFormTitle, AboutPersonalFormWrapper, AboutPersonalUsername, AvatarPersonal, SaveButton, PersonalForm, PersonalFormBackground, PersonalFormWrapper, PersonalNaBar, PersonalNavBarItem, YourPersonalData, ResumeWrapper, FileUploader, DragYourResume, ResumeDocumentElement, ResumeDocumentElementButtonWrapper, ResumeDocumentElementButton, ResumeDocumentElementTitle, AboutPersonalEducationInput, ErrorLog, AvatarPersonalWrapper, PersonalFormSubmit } from "./personalStyles";
import usePersonalInformation from "../../hooks/usePersonalInformation";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from "react";
import Draw from "../../assets/draw.png"
import Trash from "../../assets/trash.png"
import useJwt from "../../hooks/useJwt";
import axios from "axios";
import { fetchAvatarFunction } from "../../store/slices/setAvatar.slice";
const PersonalData = () => {
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
}; ///worklist.com/getPersonalInformation/getAvatar

    return (
        <>
        <PersonalFormSubmit
         onSubmit={handleSubmit}
                method="POST" encType="multipart/form-data" 
        >
            <SaveButton 
             type="submit"
            onClick={(event)=>handleSave(event)}>
                Save
            </SaveButton>
            <AboutPersonal>
               <AvatarPersonalWrapper
               >
                <AvatarPersonal 
              src={`http://localhost:5000/worklist.com/getPersonalInformation/getAvatar?token=${jwtToken}`}
                alt="logo" 
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
                            onChange={(event)=>handleChange(event)}
                            />
                        ) : (
                            <AboutPersonalEducatiom>Education: {education}</AboutPersonalEducatiom> 
                            )
                    }
                        <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"20px"}  onClick={()=>setIsClickedEducation(prev=>!prev)}/>
                    </AboutPersonalAvatarWrapper>
                    <AboutPersonalAvatarWrapper>
                        

                    {isClickedAboutYourself ? (
                            <AboutPersonalEducationInput name="about" placeholder="Type about yourself" 
                            onChange={(event)=>handleChange(event)}/>
                            ) : (
                            <AboutPersonalEducatiom>About: {describtion}</AboutPersonalEducatiom>  
                            
                            )
                    }
                        <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"20px"} onClick={()=>setIsClickedAboutYourself(prev=>!prev)}/>
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
                        onChange={(event)=>handleChange(event)}
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
                        onChange={(event)=>handleChange(event)}
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
                        onChange={(event)=>handleChange(event)}
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
                        onChange={(event)=>handleChange(event)}
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
                        onChange={(event)=>handleChange(event)}
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
                        onChange={(event)=>handleChange(event)}
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
                                   // onClick={handleClearDocument}
                                />
                            </ResumeDocumentElementButtonWrapper>
                        </ResumeDocumentElement>
                    )}
                </ResumeWrapper>
            </AboutPersonalForm>
                    </PersonalFormSubmit>
        </>
    );
}
export default PersonalData;

