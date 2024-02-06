


import { useEffect, useRef, useState , useMemo} from "react"

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import useCaptcha from "./useCaptcha";

import { emailCodeSelector } from "../store/selectors/emailCode.selector";
const useRegister = ()=> {
    const emailCode= useSelector(emailCodeSelector)
    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false)
    const [isClickedFirst, setIsClickedFirst] = useState<boolean>(false)
    const registerForm = useRef(null)
const [registerState, setRegisterState] =useState({
    username: "",
    country: "",
    city: "",
    telephone: "",
    email: "",
    password: ""
})
const [isErrorInput, setIsErrorInput] =useState({
    usernameInput: "",
    countryInput: "",
    cityInput: "",
    telephoneInput: "",
    emailInput: "",
    passwordInput: ""

})
const handleRegister =(event:  React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterState((prev) => ({
        ...prev,
        [name]: value,
    }));
}
useEffect(()=> {
    setIsClickedFirst(false)
    }, [registerState])
useEffect(()=> {
    if(isClickedFirst){
        for(let i=1; i<7; i++){
        if(registerForm.current.children[i].children[3].value==0){
             setIsErrorInput((prev) => ({
                ...prev,
                [Object.keys(prev)[i-1]]: "This field cannot be empty",
            }))
        } 
        else{
                setIsErrorInput((prev) => ({
                   ...prev,
                   [Object.keys(prev)[i-1]]: "",
               }))
        }
    }
    if(emailCode.includes("password")) {
        setIsErrorInput((prev) => ({
            ...prev,
            "passwordInput": emailCode,
        }))
    }
    if(emailCode.includes("email")) {
        setIsErrorInput((prev) => ({
            ...prev,
            "emailInput": emailCode,
        }));
    }
   
      }
}, [emailCode, isClickedFirst])
return {registerState, setRegisterState, isVisiblePassword, setIsVisiblePassword, isErrorInput, setIsErrorInput,  handleRegister, registerForm, setIsClickedFirst, isClickedFirst}
}
export default useRegister