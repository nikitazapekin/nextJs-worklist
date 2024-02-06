
import { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GetOffersSelector } from "../../store/selectors/getOffer.selector";
import { fetchGetOffersFunction } from "../../store/slices/getOffers.slice";
import { ContactButton, ExistingOffers, LocationOfJob, OfferHeader, OfferSalary, OfferTitle, OffersTitle, OffersTitleBlock, OffersWrapper, RequeredSkill, SkillsBlock, TransparentCude } from "./AllOffersStyles";
import useAllOffers from "../../hooks/useAllOffers";
const AllOffers = () => {
    const { data } = useSelector(GetOffersSelector)
    const { handleNavigate } = useAllOffers()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGetOffersFunction())
    }, [])
    return (
        <ExistingOffers>
            <OffersTitleBlock>
                <OffersTitle>
                    Search your desired profession
                </OffersTitle>
                <TransparentCude bottom={"0"} />
            </OffersTitleBlock>
            {data.map((item) => (
                <OffersWrapper>
                    <OfferHeader>
                        <OfferTitle>
                            {item.title}
                        </OfferTitle>
                        <OfferSalary>
                            {item.salary} (BYN)
                        </OfferSalary>
                    </OfferHeader>
                    <SkillsBlock>
                        {item.skills.map((skill) => (
                            <RequeredSkill>
                                {skill}
                            </RequeredSkill>
                        ))}
                    </SkillsBlock>
                    <LocationOfJob>
                        {item.location}
                    </LocationOfJob>

                    <ContactButton onClick={() => handleNavigate(String(item.id))}>
                        Contact
                    </ContactButton>
                </OffersWrapper>
            ))}
        </ExistingOffers>
    );
}

export default AllOffers;