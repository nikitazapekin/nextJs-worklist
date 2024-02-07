import { VacancyFormWrapper, VacancyFormOfOffer, VacancyTitle, VacancyDescribtion } from "./vacancyFormStyles";
import { useSelector, useDispatch } from 'react-redux';
import { GetOffersSelector } from "../../store/selectors/getOffer.selector";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useAllOffers from "../../hooks/useAllOffers";
import useWebSocket from "../../hooks/useWebSocket";
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
const {getClickedElementFromLocalStorage} = useAllOffers()
const {amountOfOnlineUsers} = useWebSocket()
const [currentElement, setCurrentElement] =useState<SelectedOfferProps | null>(getClickedElementFromLocalStorage)
console.log("EL"+JSON.stringify(getClickedElementFromLocalStorage()))
    return (
        <>
        {currentElement && (

            <VacancyFormWrapper>
            <VacancyFormOfOffer>
                <VacancyTitle>
        {currentElement.title} Online {amountOfOnlineUsers} 
                </VacancyTitle>
                <VacancyDescribtion>
                {currentElement.description}
                </VacancyDescribtion>
            </VacancyFormOfOffer>
        </VacancyFormWrapper> 
        
        )}
        </>
    );
}

export default VacancyForm;

/*

import NavBar from "../../components/NavBar/NavBar";
import OffersLeftSidePanel from "../../components/OffersLeftSidePanel/OffersLeftSidePanel";
import Footer from "../../components/footer/footer";
import { Global } from "../../components/globalStyles";
import useWebSocket from "../../hooks/useWebSocket";

const OffersPage = () => {
  //  const { amountOfOnlineUsers } = useWebSocket({ socket: new WebSocket("ws://localhost:5000/ws") });
  const { amountOfOnlineUsers } = useWebSocket( );
    return ( 
<>
<NavBar />
<Global />
<OffersLeftSidePanel />
<Footer />

</>
     );
    }
    
    export default OffersPage
    //Online {amountOfOnlineUsers} 
    */