
import { useEffect, useState } from "react";

import useRegister from "./useRegister";
const useCaptcha = () => {
  const generateRandomCode = () => {
    const codeArray: string[] = [];  
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      codeArray.push(characters.charAt(randomIndex)); 
    }
    return codeArray;
  };
  const [captchaCode, setCaptchaCode] = useState<string[]>(generateRandomCode());  
  const {isClickedFirst} = useRegister()
const [enteredCaptchaCode, setEnteredCaptchaCode] =useState<string>("")
const [isCorrectCaptcha, setIsCorrectCaptcha] =useState<boolean>(true)
  const regenerateCaptcha = () => {
    setCaptchaCode(generateRandomCode());  
  };
useEffect(()=> {
console.log(captchaCode)
}, [captchaCode])
useEffect(()=> {
  // if(isClickedFirst==false){
console.log(enteredCaptchaCode)
    if(enteredCaptchaCode==captchaCode.join('')){
      setIsCorrectCaptcha(true)
    }
    else {
      setIsCorrectCaptcha(false)
  //  }
  }
}, [enteredCaptchaCode])
  return { captchaCode, regenerateCaptcha, enteredCaptchaCode, setEnteredCaptchaCode, isCorrectCaptcha, setIsCorrectCaptcha };
};

export default useCaptcha;