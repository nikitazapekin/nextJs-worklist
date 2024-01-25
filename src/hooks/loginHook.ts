import { useEffect, useState } from "react"

export const useLogin=()=> {
    const [loginState, setLoginState]= useState({
        email: "",
        password: ""
    })
useEffect(()=> {
console.log(loginState)
}, [loginState])
return {loginState, setLoginState}
}