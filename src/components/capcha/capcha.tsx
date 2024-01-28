import { CaptchaCode, CaptchaCodeForm, CaptchaComponent, CaptchaError, CaptchaInput, CaptchaRefresh, CaptchaSymbol, RefreshWrapper } from "./capchaStyles";
import Refresh from "../../assets/refresh-page-option.png"
import {  Dispatch, SetStateAction } from "react";
interface CaptchaProps {
captchaCode: String[],
enteredCaptchaCode: string,
setEnteredCaptchaCode:Dispatch<SetStateAction<string>>,
setIsCorrectCaptcha: Dispatch<SetStateAction<boolean>>,
isCorrectCaptcha: boolean,
regenerateCaptcha: ()=> void
}
const Captcha = ({captchaCode, regenerateCaptcha, enteredCaptchaCode, setEnteredCaptchaCode, isCorrectCaptcha, setIsCorrectCaptcha}: CaptchaProps) => {
   const handleChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    setEnteredCaptchaCode(event.target.value)
   }
    return ( 
       <CaptchaComponent>
       <CaptchaCodeForm>
        <CaptchaCode>
        {captchaCode.map((item, index) => (
            <CaptchaSymbol
            fontWeight={`${Math.floor(Math.random() * 201) + 700}`}
            fontSize={`${Math.floor(Math.random() * 13) + 25}px`}
            transformX={`${Math.floor((Math.random()*1000000))%20}deg`}
            >
              {item}
            </CaptchaSymbol>
          ))}
        </CaptchaCode>
        <CaptchaRefresh
        onClick={regenerateCaptcha}
          src={Refresh} alt ="refresh" />
        </CaptchaCodeForm> 
        <RefreshWrapper>
        <CaptchaInput type="text" 
        placeholder="Type code"
        value={enteredCaptchaCode}
        onChange={(event)=>handleChange(event)}
        />
        <CaptchaError display={isCorrectCaptcha ? "none" : "block"}>
            Type code 
        </CaptchaError>
        </RefreshWrapper>
       </CaptchaComponent>
     );
}
export default Captcha;

