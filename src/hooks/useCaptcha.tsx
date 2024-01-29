/*
import { useEffect, useState, useRef } from "react";
import useRegister from "./useRegister";
const useCaptcha = () => {
  const {isClickedFirst} = useRegister()
  const captcha= useRef(null)
  const generateRandomCode = () => {
    let codeArray: string[] = [];  
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      codeArray.push(characters.charAt(randomIndex)); 
    }
    return codeArray;
  };
  const [captchaCode, setCaptchaCode] = useState<string[]>(generateRandomCode());  
const [enteredCaptchaCode, setEnteredCaptchaCode] =useState<string>("")
const [isCorrectCaptcha, setIsCorrectCaptcha] =useState<boolean>(true)
  const regenerateCaptcha = () => {
    setCaptchaCode(generateRandomCode());  
  };
useEffect(()=> {
 
 // console.log("CAPTCha "+captcha.current)
}, [enteredCaptchaCode, isClickedFirst])
  return { captchaCode, regenerateCaptcha, enteredCaptchaCode, setEnteredCaptchaCode, isCorrectCaptcha, setIsCorrectCaptcha, captcha };
};

export default useCaptcha; */



import { useEffect, useState } from "react";
const useCaptcha = () => {
  const generateRandomCode = () => {
    let codeArray: string[] = [];  
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      codeArray.push(characters.charAt(randomIndex)); 
    }
    return codeArray;
  };
  const [captchaCode, setCaptchaCode] = useState<string[]>(generateRandomCode());  
const [enteredCaptchaCode, setEnteredCaptchaCode] =useState<string>("")
const [isCorrectCaptcha, setIsCorrectCaptcha] =useState<boolean>(true)
  const regenerateCaptcha = () => {
    setCaptchaCode(generateRandomCode());  
  };
useEffect(()=> {
console.log(captchaCode)
}, [captchaCode])
  return { captchaCode, regenerateCaptcha, enteredCaptchaCode, setEnteredCaptchaCode, isCorrectCaptcha, setIsCorrectCaptcha };
};

export default useCaptcha;