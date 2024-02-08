import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { GetOffersSelector } from "../store/selectors/getOffer.selector";
interface SelectedOfferProps {
  
//data: Array<{

    title: string,
    describtion: string,
        skills: String[], 
    workingPerDay: string,
    location: string,
       salary: string,
      // token: string,
      
  //  }>
    }
const useAllOffers = () => {
    const navigate = useNavigate()
    const {id} =useParams()
    console.log("ID"+id)
    const { data } = useSelector(GetOffersSelector)
    const [selectedElement, setSelectedElement] = useState([]) 
    const handleNavigate = (id: string) => {
        const filteredElement = data.find(item => String(item.id) === id)
        if (filteredElement) {
            localStorage.setItem("clickedElement", JSON.stringify(filteredElement))
        }
        console.log(data.filter(item=> String(item.id)==id))
        navigate(`/offer`)
    }
    const getClickedElementFromLocalStorage = () => {
        const clickedElementJSON = localStorage.getItem("clickedElement")
        if (clickedElementJSON) {
            return JSON.parse(clickedElementJSON)
        } else {
            return null
        }
    }
    
    return { handleNavigate, selectedElement, getClickedElementFromLocalStorage }
}
export default useAllOffers
