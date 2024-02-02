import { useEffect, useState, useRef } from "react"
import { fetchLoginFunction } from "../store/slices/login.slice";
import { useSelector, useDispatch } from 'react-redux';
import { loginSelector } from "../store/selectors/login.selector";
import { useNavigate } from "react-router-dom";
import { error } from "console";
export const useLogin=()=> {
    const dispatch = useDispatch()
    const token = useSelector(loginSelector)
    const [isClickedFirst, setIsClickedFirst] = useState<boolean>(false)
    const [loginState, setLoginState]= useState({
        email: "",
        password: ""
    })
    const [isErrorInput, setIsErrorInput] =useState({
        emailInput: "",
        passwordInput: ""
    })
    const loginForm = useRef(null)
    const passwordForm= useRef<HTMLInputElement>(null)
    useEffect(()=> {
        if(isClickedFirst==true){
          //  if(typeof loginForm=HTMLInputElement){

                if(loginForm.current && loginForm.current.value===0) {
                    setIsErrorInput((prev) => ({
                        ...prev,
                        ["emailInput"]: "This field cannot be empty",
                    }))
                //}
} else{
    setIsErrorInput((prev) => ({
        ...prev,
        ["emailInput"]: "",
    }))
}
if(passwordForm.current.value=="0") {
         setIsErrorInput((prev) => ({
            ...prev,
            ["passwordInput"]: "This field cannot be empty",
        }))
 } else{
     setIsErrorInput((prev) => ({
         ...prev,
         ["passwordInput"]: "",
     }))
 }
        }
}, [isClickedFirst, loginState])
useEffect(()=> {
    setIsClickedFirst(false)
}, [isClickedFirst])
useEffect(()=> {
console.log(loginState)
}, [loginState])
const handleClick=() => {
    dispatch(fetchLoginFunction(loginState))
    setIsClickedFirst(true);
  }
      const handleRegister = (event:  React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = event.target;
          setLoginState((prev) => ({
              ...prev,
              [name]: value,
          }));
      }
      const navigate=useNavigate()
      useEffect(()=> {
    
          if(!token.includes("Error") && token!=undefined && token.length!=0){
              sessionStorage.setItem('jwtToken', token);
            navigate("/personal")
          }
      }, [token])
return {loginState, setLoginState, isErrorInput, setIsErrorInput, handleClick, handleRegister, loginForm, passwordForm}
}