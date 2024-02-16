
import { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GetOffersSelector } from "../../store/selectors/getOffers.selector";
import { searchParamsSelector } from "../../store/selectors/searchParams.selector";
import { fetchGetOffersFunction } from "../../store/slices/getOffers.slice";
import { ContactButton, ContentOfOffers, ExistingOffers, LocationOfJob, OfferHeader, OfferSalary, OfferTitle, OffersTitle, OffersTitleBlock, OffersWrapper, PageNumber, PageNumbers, RequeredSkill, SkillsBlock, TransparentCude } from "./AllOffersStyles";
import useAllOffers from "../../hooks/useAllOffers";
import { fetchGetAmountOfOffersFunction } from "../../store/slices/getAmountOfOffers.slice";
import { GetAmountOfOffersSelector } from "../../store/selectors/getAmountOfOffers.selector";
import useSearchJob from "../../hooks/useSearchJob";
interface DorsTypes {
    firstDot: number,
    secondDot: number,
    thirdDot: number | string
}
interface searchJobStateProps {
    title: string,
    skills: string[],
    workingPerDay: number,
    location: string,
    salary: {
        from: string,
        to: string
    }
}
const AllOffers = ({ searchJobState }: { searchJobState: searchJobStateProps }) => {
    const { data } = useSelector(GetOffersSelector)
    const { amountOfOffers, error } = useSelector(GetAmountOfOffersSelector)
    const { handleNavigate } = useAllOffers()
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6)
    const [lastClickedElement, setLastClickedElement] = useState(1)
    const [dots, setDots] = useState({
        firstDot: 1,
        secondDot: 2,
        thirdDot: 3
    })
    const handleIncrement = () => {
        console.log("LIMMM")
        console.log(limit * (page))
        if (limit * (page + 2) <= amountOfOffers) {
            setPage(prev => prev + 1)
            setDots(prevDots => ({
                firstDot: prevDots.firstDot + 1,
                secondDot: prevDots.secondDot + 1,
                thirdDot: prevDots.thirdDot + 1
            }));
        }
    }
    const handleDecrement = () => {
        if (page != 1) {
            setPage(prev => prev - 1)
            setDots(prevDots => ({
                firstDot: prevDots.firstDot - 1,
                secondDot: prevDots.secondDot - 1,
                thirdDot: prevDots.thirdDot - 1
            }));
        }
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGetOffersFunction({
            page: 1, limit, title: searchJobState.title, skills: searchJobState.skills, workingPerDay: searchJobState.workingPerDay,
            location: searchJobState.location, salary: searchJobState.salary
        }))
    }, [])
    const handlePageIndexClick = (index: number) => {
        setLastClickedElement(index)
        dispatch(fetchGetOffersFunction({
            page: index, limit, title: searchJobState.title, skills: searchJobState.skills, workingPerDay: searchJobState.workingPerDay,
            location: searchJobState.location, salary: searchJobState.salary
        }))
    };
    useEffect(() => {
        dispatch(fetchGetAmountOfOffersFunction())
    }, [])
    return (
        <ExistingOffers>
            <OffersTitleBlock>
                <OffersTitle>
                    Search your desired profession
                </OffersTitle>
                <TransparentCude bottom={"0"} />
            </OffersTitleBlock>
            <ContentOfOffers>
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
            </ContentOfOffers>
            <PageNumbers>
                <PageNumber color="#fff" onClick={handleDecrement}>⬅</PageNumber>
                <PageNumber color={lastClickedElement == dots.firstDot ? "orange" : "#fff"} onClick={() => handlePageIndexClick(dots.firstDot)}> {dots.firstDot} </PageNumber>
                <PageNumber color={lastClickedElement == dots.secondDot ? "orange" : "#fff"} onClick={() => handlePageIndexClick(dots.secondDot)}>{dots.secondDot}</PageNumber>
                <PageNumber color={lastClickedElement == dots.thirdDot ? "orange" : "#fff"} onClick={() => handlePageIndexClick(dots.thirdDot)}> {dots.thirdDot} </PageNumber>
                <PageNumber color="#fff" onClick={handleIncrement}>⮕</PageNumber>
            </PageNumbers>
        </ExistingOffers>
    );
}

export default AllOffers;


