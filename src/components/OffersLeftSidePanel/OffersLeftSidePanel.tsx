
import { useEffect, useState, memo, useRef } from "react";
import { ExistingOffers, RangeSlider, OffersNavigation, OffersPanelBlock, OffersPanelBlockTitle, OffersSearchNavigationItemInput, OffersSearchNavigationItemTitle, OffersSearchNavigationWrapper, OffersWrapper, RangeSliderValue, AddSkillBtn, SkillsList, SkillListItem, SkillListItemWrapper, SkillListItemImage, SkillListItemTitle, IsHideSideBar, IsHideSideBarLineFirst, IsHideSideBarLineSecond, IsHideSideBarLineThird, LeftSidePanelSearchButton, LeftSidePanelSearchButtonWrapper, OffersPanelBlockTitleWrapper, OffersPanelBlockTitleImage } from "./OffersLeftSidePanelStyles";
import useSearchJob from "../../hooks/useSearchJob";
import Trash from "../../assets/trashSkill.png"
import AllOffers from "../AllOffers/AllOffers";
import Search from "../../assets/search.png"
const OffersLeftSidePanel = memo(() => {
    const sidebar = useRef(null)
    const sidebarButton = useRef(null)
    const [isHide, setIsHide] = useState(false)
    const [currentPosition, setCurrentPosition] = useState( 0)
    const [currentPositionOfHideButton, setCurrentPositionOfHideButton] = useState( 0 )
    const { searchJobState, setSearchJobState, handleChange, handleAdd, handleAddChange, handleRemoveSkill , handleOnChange} = useSearchJob()

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
                    <OffersPanelBlockTitleWrapper>

                    <OffersPanelBlockTitle>
                        Search job
                    </OffersPanelBlockTitle>
                    <OffersPanelBlockTitleImage  src={Search}  alt="search"/>
                    </OffersPanelBlockTitleWrapper>
                    <OffersSearchNavigationWrapper>
                        <OffersSearchNavigationItemTitle>
                            By title
                        </OffersSearchNavigationItemTitle>
                        <OffersSearchNavigationItemInput placeholder="Type title" 
                        name="title"
                        onChange={(event)=>handleOnChange(event)}
                        />
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
                        <OffersSearchNavigationItemInput placeholder="Type location"
                            name="location"
                            onChange={(event)=>handleOnChange(event)}
                        />
                    </OffersSearchNavigationWrapper>
                    <OffersSearchNavigationWrapper>
                        <OffersSearchNavigationItemTitle>
                            By salary
                        </OffersSearchNavigationItemTitle>
                        <RangeSlider
                            name="from"
                            type="range" min="0" max="10000" defaultValue={0} 
                            onChange={(event) => { handleChange(event); }} />
                        <RangeSlider
                            name="to"
                            type="range" min="0" max="10000" defaultValue={0}
                             onChange={(event) => { handleChange(event); }} />
                        <RangeSliderValue>{searchJobState.salary.from ? searchJobState.salary.from : "0"}-{searchJobState.salary.to ? searchJobState.salary.to : "0"} salary (BYN)</RangeSliderValue>
                    </OffersSearchNavigationWrapper>
                  <LeftSidePanelSearchButton>
                    Search
                    </LeftSidePanelSearchButton>  
                </OffersPanelBlock>
            </OffersNavigation>
            <AllOffers />
        </OffersWrapper>
    );
})
export default OffersLeftSidePanel;