
import { useEffect, useState } from "react";
const useJwt = () => {
    const [jwtToken, setJwtToken] =useState<string>("")
    useEffect(() => {
        const jwt = sessionStorage.getItem('jwtToken');
      setJwtToken(jwt)
    }, [sessionStorage]);
    return {jwtToken}
}
export default useJwt