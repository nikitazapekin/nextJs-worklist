
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import useJwt from "./useJwt";
import { useNavigate } from "react-router-dom";
import personalInformationSlice from "../store/slices/person.slice";
//import { fetchPersonalInformationFunction } from "../../store/slices/personalInformation.slice";
//import { personalInfSelector } from "../../store/selectors/personalInformation.selector";
import { personalInfSelector } from "../store/selectors/person.selector";
const usePersonalInformation = () => {
    const {username, email, country, city, telephone, RegistrationData, avatar, document, favouriteOffers, experience, lastTimeAtNetwork, education, describtion} = useSelector(personalInfSelector)
    useEffect(() => {
  
    }, [username])
    console.log("username" +JSON.stringify(username))
   
    const navigate = useNavigate()
   
    const handleLogout = () => {
      navigate("/sign_in")
      sessionStorage.removeItem('jwtToken');
    }
    return {handleLogout, username, email, country, city, telephone, RegistrationData, avatar, document, favouriteOffers, experience, lastTimeAtNetwork, education, describtion}
}
export default usePersonalInformation
