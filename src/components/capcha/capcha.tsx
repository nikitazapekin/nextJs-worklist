import type {Dispatch, SetStateAction} from "react";

import { CaptchaCode, CaptchaCodeForm, CaptchaComponent, CaptchaError, CaptchaInput, CaptchaRefresh, CaptchaSymbol, RefreshWrapper } from "./capchaStyles";

import Refresh from "../../assets/refresh-page-option.png"
import useCaptcha from "../../hooks/useCaptcha";
interface CaptchaProps {
captchaCode: string[],
enteredCaptchaCode: string,
setEnteredCaptchaCode:Dispatch<SetStateAction<string>>,
setIsCorrectCaptcha: Dispatch<SetStateAction<boolean>>,
isCorrectCaptcha: boolean,
regenerateCaptcha: ()=> void,
}
const Captcha = ({captchaCode, regenerateCaptcha, enteredCaptchaCode, setEnteredCaptchaCode, isCorrectCaptcha, setIsCorrectCaptcha}: CaptchaProps) => {
  // const {captcha} =useCaptcha()
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
        <CaptchaInput
      //  ref={captcha}
        type="text" 
        placeholder="Type code"
        value={enteredCaptchaCode}
        onChange={(event)=>{ handleChange(event); }}
        />
        <CaptchaError display={isCorrectCaptcha ? "none" : "block"}>
            Type code 
        </CaptchaError>
        </RefreshWrapper>
       </CaptchaComponent>
     );
}
export default Captcha;

