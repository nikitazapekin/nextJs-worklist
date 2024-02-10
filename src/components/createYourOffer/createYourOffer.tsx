import { useState, memo } from "react";

import axios from "axios";

import { AddSkillBtn, CreateYourOffer, CreateYourOfferForm, CreateYourOfferTitle, FormError, FormImage, InputBlockTitle, InputBlockWrapper, InputCreateOffer, InputCreateOfferWrapper, ListOfSkills, SaveButton, SelectOption, SelectOptionElement, SkillElement, SkillElementButtonTrash, SkillElementButtonWrapper, SkillElementTitle } from "./createYourFormStyles";
import ModalWindow from "../modal/modal";
import Draw from "../../assets/draw.png"
import useCreateOffer from "../../hooks/useCreateOffer";
import TrashSkill from "../../assets/trashSkill.png"
import useJwt from "../../hooks/useJwt";
import handleSubmit from "../../api/uploadFile";
const CreateYourOfferComponent = memo(() => {
    const {jwtToken} =useJwt()

    const { handleChange, handleAddSkill, handleSave, isClickedFirst, handleFileChange,// handleSubmit,
         handleChangeSelect,
        skillInput, stateOfOffer, handleRemove,   stateOfOfferError, selectedFiles} = useCreateOffer()     
        const [isOpen, setIsOpen] = useState(false)   
    return (
        <CreateYourOffer>
            <CreateYourOfferTitle>
                Create your offer
            </CreateYourOfferTitle>
            <CreateYourOfferForm
             onSubmit={async (event)=>{ await handleSubmit(event, jwtToken); }}
             method="POST" encType="multipart/form-data" 
            >
                <InputBlockWrapper>
                    <InputBlockTitle>Titlle</InputBlockTitle>
                    <FormError>{isClickedFirst && stateOfOfferError.titleError}</FormError>
                    <InputCreateOfferWrapper>
                        <InputCreateOffer
                            onChange={handleChange}
                            name="title"
                            placeholder="Type title of vacancy" />
                        <FormImage src={Draw} alt="form picture" />
                    </InputCreateOfferWrapper>
                </InputBlockWrapper>
                <InputBlockWrapper>
                    <InputBlockTitle>Describtion</InputBlockTitle>
                    <FormError>{isClickedFirst && stateOfOfferError.describtionError}</FormError>
                    <InputCreateOfferWrapper>
                        <InputCreateOffer
                            onChange={handleChange}
                            name="describtion"
                            placeholder="Type describtion of vacancy" />
                        <FormImage src={Draw} alt="form picture" />
                    </InputCreateOfferWrapper>
                </InputBlockWrapper>
                <InputBlockWrapper>
                    <InputBlockTitle>Skills</InputBlockTitle>    
                    <ListOfSkills>
                        {stateOfOffer.skills.map((item, index) => (
                            <SkillElement key={index}>
                                <SkillElementTitle>
                                {item}
                                </SkillElementTitle>
                                <SkillElementButtonWrapper>
                                    <SkillElementButtonTrash src={TrashSkill} alt="trash"
                                    onClick={()=> { handleRemove(item); }}
                                    />
                                </SkillElementButtonWrapper>
                            </SkillElement>
                        ))}
                    </ListOfSkills>
                    <InputCreateOfferWrapper>
                        <InputCreateOffer
                        ref={skillInput}
                            onChange={handleChange}
                            placeholder="Type required skill of vacancy" />
                        <FormImage src={Draw} alt="form picture" />
                    </InputCreateOfferWrapper>
                    
                    <AddSkillBtn   
                    type="button"          
                        onClick={(event) => { handleAddSkill(event); }}
                    >Add skill</AddSkillBtn>
                </InputBlockWrapper>
                <InputBlockWrapper>
                    <InputBlockTitle>Working time per day</InputBlockTitle>
                    <InputCreateOfferWrapper>
                        <SelectOption  name="workingPerDay" onChange={(event)=>{ handleChangeSelect(event); }} >
                            <SelectOptionElement value="0-2 hours">0-2 hours</SelectOptionElement>
                            <SelectOptionElement value="0-4 hours">0-4 hours</SelectOptionElement>
                            <SelectOptionElement value="0-8 hours">0-8 hours</SelectOptionElement>
                            <SelectOptionElement value="8+ hours">8+ hours</SelectOptionElement>
                        </SelectOption>
                        <FormImage src={Draw} alt="form picture" />
                    </InputCreateOfferWrapper>
                </InputBlockWrapper>
                <InputBlockWrapper>
                    <InputBlockTitle>Location</InputBlockTitle>
                    <FormError>{isClickedFirst && stateOfOfferError.location}</FormError>
                    <InputCreateOfferWrapper>
                        <InputCreateOffer
                            name="location"
                            onChange={handleChange}
                            placeholder="Type location of vacancy" />
                        <FormImage src={Draw} alt="form picture" />
                    </InputCreateOfferWrapper>
                </InputBlockWrapper>
                <InputBlockWrapper>
                    <InputBlockTitle>Salary (BYN)</InputBlockTitle>
                    <InputCreateOfferWrapper>
                        <SelectOption name="salary" onChange={(event)=>{ handleChangeSelect(event); }}>
                            <SelectOptionElement value="0-1000">0-1000</SelectOptionElement>
                            <SelectOptionElement value="1000-2000">1000-2000</SelectOptionElement>
                            <SelectOptionElement value="2000-3000">2000-3000</SelectOptionElement>
                            <SelectOptionElement value="3000+">3000+</SelectOptionElement>
                        </SelectOption>
                        <FormImage src={Draw} alt="form picture" />
                    </InputCreateOfferWrapper>
                </InputBlockWrapper>
                <InputBlockWrapper>
                <InputBlockTitle>Add different pictures</InputBlockTitle>
                <InputCreateOfferWrapper>
                <InputCreateOffer
type="file"
name="my-files"
accept="image/*"
 placeholder="drag some photos here"
 onChange={(event)=>{ handleFileChange(event); }}
multiple
                />
                 {selectedFiles.map((file, index) => (
            <img key={index} src={URL.createObjectURL(file)} alt={`form picture ${index}`} />
          ))}
                        <FormImage src={Draw} alt="form picture" />
                    </InputCreateOfferWrapper>
                </InputBlockWrapper>
                <SaveButton 
                onClick={()=>{
                    
                    handleSave()
                    setIsOpen(true) 
                
                }}
                 type="submit"
                >
                    Save
                </SaveButton>
            </CreateYourOfferForm>
            <ModalWindow  open={isOpen} //setIsOpen={setIsOpen} 
        onClose={() => setIsOpen(false)}>
        Contragulation! You have successfully changed your personal data!
                    </ModalWindow>
        </CreateYourOffer>
    );
})

export default CreateYourOfferComponent;