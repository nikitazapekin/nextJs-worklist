
import { useEffect, useState, memo } from "react";

import { useSelector, useDispatch } from 'react-redux';

import { ExistingOffers, RangeSlider, OffersNavigation, OffersPanelBlock, OffersPanelBlockTitle, OffersSearchNavigationItemInput, OffersSearchNavigationItemTitle, OffersSearchNavigationWrapper, OffersWrapper, RangeSliderValue, AddSkillBtn, SkillsList, SkillListItem, SkillListItemWrapper, SkillListItemImage, SkillListItemTitle } from "./OffersLeftSidePanelStyles";
import useSearchJob from "../../hooks/useSearchJob";
import Trash from "../../assets/trashSkill.png"
import { fetchGetOffersFunction } from "../../store/slices/getOffers.slice";
import { GetOffersSelector } from "../../store/selectors/getOffer.selector";
import AllOffers from "../AllOffers/AllOffers";
const OffersLeftSidePanel = memo(() => {
    const { data } = useSelector(GetOffersSelector)
    const { searchJobState, setSearchJobState, handleChange, handleAdd, handleAddChange, handleRemoveSkill } = useSearchJob()
    const dispatch = useDispatch()

    return (
        <OffersWrapper>
            <OffersNavigation>
                <OffersPanelBlock>
                    <OffersPanelBlockTitle>
                        Search job
                    </OffersPanelBlockTitle>
                    <OffersSearchNavigationWrapper>
                        <OffersSearchNavigationItemTitle>
                            By title
                        </OffersSearchNavigationItemTitle>
                        <OffersSearchNavigationItemInput placeholder="Type title" />
                    </OffersSearchNavigationWrapper>
                    <OffersSearchNavigationWrapper>
                        <OffersSearchNavigationItemTitle>
                            By skills
                        </OffersSearchNavigationItemTitle>
                        <SkillsList>
                            {
                                searchJobState.skills.map((item) => (
                                    <SkillListItemWrapper>
                                        <SkillListItem>
                                            <SkillListItemTitle>
                                                {item}
                                            </SkillListItemTitle>
                                            <SkillListItemImage src={Trash} onClick={() => { handleRemoveSkill(item); }} />
                                        </SkillListItem>
                                    </SkillListItemWrapper>
                                ))
                            }
                        </SkillsList>
                        <OffersSearchNavigationItemInput placeholder="Type skill" onChange={(event) => { handleAddChange(event); }} />
                        <AddSkillBtn onClick={handleAdd}>Add skill</AddSkillBtn>
                    </OffersSearchNavigationWrapper>
                    <OffersSearchNavigationWrapper>
                        <OffersSearchNavigationItemTitle>
                            By working-time
                        </OffersSearchNavigationItemTitle>
                        <RangeSliderValue>{searchJobState.workingPerDay} hours per day</RangeSliderValue>
                        <RangeSlider
                            name="workingPerDay"
                            type="range" min="0" max="12" defaultValue={searchJobState.workingPerDay} onChange={(event) => { handleChange(event); }} />
                    </OffersSearchNavigationWrapper>
                    <OffersSearchNavigationWrapper>
                        <OffersSearchNavigationItemTitle>
                            By location
                        </OffersSearchNavigationItemTitle>
                        <OffersSearchNavigationItemInput placeholder="Type location" />
                    </OffersSearchNavigationWrapper>
                    <OffersSearchNavigationWrapper>
                        <OffersSearchNavigationItemTitle>
                            By salary
                        </OffersSearchNavigationItemTitle>
                        <RangeSlider
                            name="salary"
                            type="range" min="0" max="10000" defaultValue={searchJobState.salary} onChange={(event) => { handleChange(event); }} />
                        <RangeSliderValue>{searchJobState.salary} salary (BYN)</RangeSliderValue>
                    </OffersSearchNavigationWrapper>
                </OffersPanelBlock>
            </OffersNavigation>
            <AllOffers />
         {/*   <ExistingOffers>
                dw
                        </ExistingOffers> */}
        </OffersWrapper>
    );
})

export default OffersLeftSidePanel;