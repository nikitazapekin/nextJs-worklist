
import { useEffect, useState, memo, useRef } from "react";
import { ExistingOffers, RangeSlider, OffersNavigation, OffersPanelBlock, OffersPanelBlockTitle, OffersSearchNavigationItemInput, OffersSearchNavigationItemTitle, OffersSearchNavigationWrapper, OffersWrapper, RangeSliderValue, AddSkillBtn, SkillsList, SkillListItem, SkillListItemWrapper, SkillListItemImage, SkillListItemTitle, IsHideSideBar, IsHideSideBarLineFirst, IsHideSideBarLineSecond, IsHideSideBarLineThird } from "./OffersLeftSidePanelStyles";
import useSearchJob from "../../hooks/useSearchJob";
import Trash from "../../assets/trashSkill.png"
import AllOffers from "../AllOffers/AllOffers";
const OffersLeftSidePanel = memo(() => {
    const sidebar = useRef(null)
    const sidebarButton = useRef(null)
    const [isHide, setIsHide] = useState(false)
    const [currentPosition, setCurrentPosition] = useState( 0)
    const [currentPositionOfHideButton, setCurrentPositionOfHideButton] = useState( 0 )
    const { searchJobState, setSearchJobState, handleChange, handleAdd, handleAddChange, handleRemoveSkill } = useSearchJob()
 
    const onHide = () => {
        if (isHide == false) {
            setCurrentPosition(sidebar.current.offsetWidth)
            setCurrentPositionOfHideButton(sidebarButton.current.offsetWidth)
            setIsHide(true)
        }
        else {
            setCurrentPosition(0)
            setCurrentPositionOfHideButton(0)
            setIsHide(false)
        }
    }
    return (
        <OffersWrapper>
            <OffersNavigation
                ref={sidebar}
                right={currentPosition}
            >
                <IsHideSideBar
                    ref={sidebarButton}
                    onClick={onHide}
                    left={currentPositionOfHideButton}
                >
                    <IsHideSideBarLineFirst  isHide={isHide} />
                    <IsHideSideBarLineSecond  isHide={isHide} />
                    <IsHideSideBarLineThird  isHide={isHide} />
                </IsHideSideBar>
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
        </OffersWrapper>
    );
})

export default OffersLeftSidePanel;