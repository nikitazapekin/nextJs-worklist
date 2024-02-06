import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
    const { data } = useSelector(GetOffersSelector)
    const [selectedElement, setSelectedElement] = useState([]) 
    // useState<SelectedOfferProps>([]) 
    const handleNavigate = (id: string) => {
        console.log(data.filter(item=> String(item.id)==id))
        navigate(`/vacancy/${id}`)
        //setSelectedElement(data.filter(item=> String(item.id)==id))
    }
    return { handleNavigate, selectedElement }
}
export default useAllOffers
/*

import { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GetOffersSelector } from "../../store/selectors/getOffer.selector";
import { fetchGetOffersFunction } from "../../store/slices/getOffers.slice";
import { ContactButton, ExistingOffers, LocationOfJob, OfferHeader, OfferSalary, OfferTitle, OffersTitle, OffersTitleBlock, OffersWrapper, RequeredSkill, SkillsBlock } from "./AllOffersStyles";
import useAllOffers from "../../hooks/useAllOffers";
const AllOffers = () => {
    const { data } = useSelector(GetOffersSelector)
*/