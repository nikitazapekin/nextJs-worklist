
import { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GetOffersSelector } from "../../store/selectors/getOffers.selector";
import { fetchGetOffersFunction } from "../../store/slices/getOffers.slice";
import { ContactButton, ContentOfOffers, ExistingOffers, LocationOfJob, OfferHeader, OfferSalary, OfferTitle, OffersTitle, OffersTitleBlock, OffersWrapper, PageNumber, PageNumbers, RequeredSkill, SkillsBlock, TransparentCude } from "./AllOffersStyles";
import useAllOffers from "../../hooks/useAllOffers";
import { fetchGetAmountOfOffersFunction } from "../../store/slices/getAmountOfOffers.slice";
import { GetAmountOfOffersSelector } from "../../store/selectors/getAmountOfOffers.selector";
interface DorsTypes {
    firstDot: number,
    secondDot: number,
    thirdDot: number | string
}
const AllOffers = () => {
    const { data } = useSelector(GetOffersSelector)
    const { amountOfOffers, error } = useSelector(GetAmountOfOffersSelector)
    const { handleNavigate } = useAllOffers()
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6)
    const [dots, setDots] = useState({
        firstDot: 1,
        secondDot: 2,
        thirdDot: 3
    })
    const handleIncrement = () => {
        console.log("LIMMM")
        console.log( limit*(page))
        if(limit*(page+2)<=amountOfOffers){

            setPage(prev => prev + 1)
            setDots(prevDots => ({
                firstDot: prevDots.firstDot + 1,
                secondDot: prevDots.secondDot + 1,
                thirdDot: prevDots.thirdDot + 1
            }));
            
        } /* else {
            setDots(prevDots => ({
                firstDot: prevDots.firstDot,
                secondDot: prevDots.secondDot,
                thirdDot: "",
              //  thirdDot: prevDots.thirdDot + 1
            }));
        } */
    }
    const handleDecrement = () => {
       // if (page != 1) {

            setPage(prev => prev - 1)
           // setDots()
           setDots(prevDots => ({
            firstDot: prevDots.firstDot - 1,
            secondDot: prevDots.secondDot - 1,
            thirdDot: prevDots.thirdDot - 1
        }));
      //  }
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGetOffersFunction({ page, limit }))
    }, [])
    const handlePageIndexClick = (index: number) => {
       // if(limit*)
       console.log("CLICKED INDEX"+index)
       dispatch(fetchGetOffersFunction({page: index, limit }))
     //   dispatch(fetchGetOffersFunction({page: page+index-1, limit }))
    };
    useEffect(()=> {
dispatch(fetchGetAmountOfOffersFunction())
    }, [])
    useEffect(()=> {
console.log("PAGEEEEEEEEE"+ page)
    }, [page])
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
                <PageNumber onClick={handleDecrement}>⬅</PageNumber>
                       {/*       <PageNumber onClick={() => handlePageIndexClick(page)}> {page}</PageNumber>
            <PageNumber onClick={() => handlePageIndexClick(page + 1)}> {page + 1}</PageNumber>
                            <PageNumber onClick={() => handlePageIndexClick(page + 2)}> {page + 2}</PageNumber>  */}
                              <PageNumber onClick={() => handlePageIndexClick(dots.firstDot)}> {dots.firstDot} </PageNumber>
            <PageNumber onClick={() => handlePageIndexClick(dots.secondDot)}>{dots.secondDot}</PageNumber>
                            <PageNumber onClick={() => handlePageIndexClick(dots.thirdDot)}> {dots.thirdDot} </PageNumber> 
                <PageNumber onClick={handleIncrement}>⮕</PageNumber>
            </PageNumbers>

        </ExistingOffers>
    );
}

export default AllOffers;