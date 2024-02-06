import { VacancyFormWrapper, VacancyFormOfOffer, VacancyTitle, VacancyDescribtion } from "./vacancyFormStyles";
import { useSelector, useDispatch } from 'react-redux';
import { GetOffersSelector } from "../../store/selectors/getOffer.selector";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useAllOffers from "../../hooks/useAllOffers";
interface SelectedOfferProps {
    id: number,
    title: string,
    description: string,
    skills: String[],
    workingPerDay: string,
    location: string,
    salary: string,
}
const VacancyForm = () => {
  //  const { id } = useParams()
    const [currentElement, setCurrentElement] = useState<SelectedOfferProps>({
        id: 0,
        title: "",
        description: "",
        skills: [],
        workingPerDay: "",
        location: "",
        salary: "",
    })
    const { data } = useSelector(GetOffersSelector)
    useEffect(() => {
   //     const elems = data.filter(item => String(item.id) == id)
     
    }, [data])
    useEffect(()=> {
console.log("EL" +JSON.stringify(currentElement))
console.log(currentElement.description)
    }, [currentElement])
    return (
        <>
        
        </>
    );
}

export default VacancyForm;
/*
        <VacancyFormWrapper>
            <VacancyFormOfOffer>
                <VacancyTitle>
                {currentElement.title}
                    {currentElement.description}
                </VacancyTitle>
                <VacancyDescribtion>
                </VacancyDescribtion>
            </VacancyFormOfOffer>
        </VacancyFormWrapper> */