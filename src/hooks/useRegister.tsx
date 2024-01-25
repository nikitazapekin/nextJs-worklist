import { useEffect, useState } from "react"
const useRegister = ()=> {
const [registerState, setRegisterState] =useState({
    username: "",
    country: "",
    city: "",
    telephone: "",
    email: "",
    password: ""
})
useEffect(()=> {
    console.log(registerState)
}, [registerState])
return {registerState, setRegisterState}
}
export default useRegister