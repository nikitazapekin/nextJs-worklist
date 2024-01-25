import { useEffect, useState } from "react"

export const useLogin=()=> {
    const [loginState, setLoginState]= useState({
        username: "",
        email: "",
        password: ""
    })

return {loginState, setLoginState}
}