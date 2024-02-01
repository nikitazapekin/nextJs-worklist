import { AboutPersonal, AboutPersonalAvatarDraw, AvatarPersonalInput, AboutPersonalAvatarWrapper, AboutPersonalBlock, AboutPersonalDateOfRegister, AboutPersonalEducatiom, AboutPersonalForm, AboutPersonalFormInput, AboutPersonalFormSubWrapper, AboutPersonalFormTitle, AboutPersonalFormWrapper, AboutPersonalUsername, AvatarPersonal, SaveButton, PersonalForm, PersonalFormBackground, PersonalFormWrapper, PersonalNaBar, PersonalNavBarItem, YourPersonalData, ResumeWrapper, FileUploader, DragYourResume, ResumeDocumentElement, ResumeDocumentElementButtonWrapper, ResumeDocumentElementButton, ResumeDocumentElementTitle, AboutPersonalEducationInput, ErrorLog, AvatarPersonalWrapper } from "./personalStyles";
import usePersonalInformation from "../../hooks/usePersonalInformation";
import { useEffect, useState } from "react";
import Draw from "../../assets/draw.png"
import Trash from "../../assets/trash.png"
const PersonalData = () => {
    
    const {handleChange, handleClearDocument, fileUploader, username, email, country, city, 
         handleSave, handleAvatar, handleChangeFile,
         telephone, RegistrationData, avatar, document, favouriteOffers, 
         experience, lastTimeAtNetwork, education, describtion } = usePersonalInformation()
  const [isClickedEducation, setIsClickedEducation] =useState<boolean>(false)
  const [isClickedAboutYourself, setIsClickedAboutYourself] =useState<boolean>(false)
    return (
        <>
            <SaveButton onClick={handleSave}>
                Save
            </SaveButton>
            <AboutPersonal>
               <AvatarPersonalWrapper>
                <AvatarPersonal 
                src={avatar} 
                alt="logo" 
                />
                <AvatarPersonalInput 
                 type="file"
                 accept="image/*"
                 onChange={handleAvatar}
                // onChange={handleFileChange}
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
                                    onClick={handleClearDocument}
                                />
                            </ResumeDocumentElementButtonWrapper>
                        </ResumeDocumentElement>
                    )}
                </ResumeWrapper>
            </AboutPersonalForm>
        </>
    );
}
export default PersonalData;

