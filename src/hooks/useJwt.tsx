
import { useEffect, useState } from "react";
const useJwt = () => {
    const [jwtToken, setJwtToken] =useState<string>("")
    useEffect(() => {
        const jwt = sessionStorage.getItem('jwtToken');
      setJwtToken(jwt)
    }, [sessionStorage]);
    useEffect(()=> {
console.log("JWT")
    }, [jwtToken])
    return {jwtToken}
}
export default useJwt