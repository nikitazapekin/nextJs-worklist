
import { useState, useRef, useEffect } from "react"

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import useRegister from "./useRegister";

import { fetchAuthFunction } from "../store/slices/auth.slice";
import { authSelector } from "../store";
import { fetchFinalRegisterFunction } from "../store/slices/finalRegister.slice";
import { finalRegisterMessageSelector } from "../store/selectors/finalRegisterMessage.selector";
interface CodeState {
    firstForm: string;
    secondForm: string;
    thirdForm: string;
    fourthForm: string;
    fifthForm: string;
    sixthForm: string;
  }
const useTypeCode = () => {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const  {username, password, city, country, email, telephone, authResponse} =useSelector(authSelector)
    const finalRegisterMessage = useSelector(finalRegisterMessageSelector)
    useEffect(()=> {
        if(finalRegisterMessage.includes("correct")){
            navigate("/sign_in")
        }
        console.log("final"+finalRegisterMessage)
    }, [finalRegisterMessage])
    console.log("TOOOOOKEN"+authResponse)
    const {registerState, setRegisterState} =useRegister()
    const selectInput = useRef(null)
    const [selectedForm, setSelectedForm] = useState(0)
    const [codeState, setCodeState] =useState<CodeState>({
        firstForm: "",
        secondForm: "", 
        thirdForm: "", 
        fourthForm: "",
        fifthForm: "",
        sixthForm: ""
    })
    const areAllFieldsFilled = () => {
        for (const key in codeState) {
            if (codeState[key as keyof CodeState] === "") {
            return false;
          }
        }
        return true;
      };
      useEffect(()=> {
console.log(JSON.stringify(registerState))
      }, [registerState])
    useEffect(()=> {
   if (areAllFieldsFilled()) {
    const typedCode= codeState.firstForm+ codeState.secondForm+codeState.thirdForm+codeState.fourthForm+codeState.fifthForm+codeState.sixthForm
    const obj = {
        username,
        email,
        password, 
        city,
        country,
         telephone,
         code: typedCode
    }
console.log("OBj" +JSON.stringify(obj))
 //  dispatch(fetchAuthFunction(obj));
    console.log("Все поля заполнены!");
    dispatch(fetchFinalRegisterFunction(obj))
  } else {
    console.log("Не все поля заполнены");
  }
    }, [codeState])
    useEffect(()=> {
        selectInput.current.children[selectedForm].value!=""  && selectedForm!=5 ? setSelectedForm(prev=>prev+1) : ""
        selectInput.current.children[selectedForm].focus() 
    }, [selectInput, selectedForm, codeState])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputName = event.target.name; 
        const inputValue = event.target.value;
        const index: number=0;
        if(event.target.value.length<2){
            setCodeState(prevState => ({
                ...prevState,
                [inputName]: inputValue
            }));
        } 
        else {
            event.target.value=inputValue[0]
            if(index!=6){
                selectInput.current.children[index].focus()
            }
           if(index==5){
                console.log("chamge" +JSON.stringify(codeState))
            }
        } 
    }
return {selectInput, codeState, setCodeState, handleChange}

}
 export default useTypeCode