/*import useRegister from "../../hooks/useRegister";
import { useSelector, useDispatch } from 'react-redux';
import { ErrorRegisterInformation, OrHaveAnAccount, RegisterComponentTitle, RegisterFormBaccground, RegisterFormComponent, RegisterFormInputMarkdown, RegisterFormInputUsername, RegisterFormInputWrapper, RegisterFormSubmit, RegisterFormWrapper, RegisterIcon } from "./registerFormStyles";
import { Link, useNavigate } from "react-router-dom";
import { fetchAuthFunction } from "../../store/slices/auth.slice";
import { authSelector } from "../../store";
import { useEffect, useRef, useState } from "react";
import useCaptcha from "../../hooks/useCaptcha";
import Captcha from "../capcha/capcha";
import Users from "../../assets/users.png"
import Country from "../../assets/country.png"
import City from "../../assets/city.png"
import Tel from "../../assets/tel.png"
import Email from "../../assets/email.png"
import Eye from "../../assets/eye.png"
import EyeCrossed from "../../assets/eye-crossed.png"
import { fetchEmailCodeFunction } from "../../store/slices/emailCode.slice";
import { emailCodeSelector } from "../../store/selectors/emailCode.selector";
const RegisterForm = () => {
    const navigate= useNavigate()
    const emailCode= useSelector(emailCodeSelector)
    const passwordForm = useRef(null)
    const [enteredCaptchaCode, setEnteredCaptchaCode] = useState<string>("")
    const {captchaCode, regenerateCaptcha, isCorrectCaptcha, setIsCorrectCaptcha} = useCaptcha()
    const {registerState,  isVisiblePassword, setIsVisiblePassword, handleRegister, registerForm, isErrorInput, setIsClickedFirst, isClickedFirst }= useRegister()
    const dispatch = useDispatch();
    const handleSubmit =()=> {
            setIsClickedFirst(true)
            dispatch(fetchEmailCodeFunction(registerState))
        }
useEffect(()=> {
    if(!emailCode.includes("password") && !emailCode.includes("email")){
        const str= captchaCode.join('')
        console.log(str)
    if(enteredCaptchaCode==str){
        navigate("/type_code")
    } else {
        setIsCorrectCaptcha(false)
    }
    }
}, [emailCode, isClickedFirst])
    const handlePassword= ()=> {
setIsVisiblePassword(prev=>!prev)
passwordForm.current.type = isVisiblePassword ? "text" : "password";
    }
    return (
    <RegisterFormComponent
    >
        <RegisterFormWrapper
        ref={registerForm} 
        
        >
            <RegisterComponentTitle>
                Sign up
            </RegisterComponentTitle>
         <RegisterFormInputWrapper>
            <RegisterFormInputMarkdown>
                Username
            </RegisterFormInputMarkdown>
            <ErrorRegisterInformation>
              {isErrorInput.usernameInput}
            </ErrorRegisterInformation>
            <RegisterIcon src={Users} alt="users"/>
            <RegisterFormInputUsername 
            name="username"
            onChange={(event)=> handleRegister(event)}
            placeholder="Type username" required />
         </RegisterFormInputWrapper>
         <RegisterFormInputWrapper>
            <RegisterFormInputMarkdown>
              Country
            </RegisterFormInputMarkdown>
            <ErrorRegisterInformation>
              {isErrorInput.countryInput}
            </ErrorRegisterInformation>
            <RegisterIcon src={Country} alt="users"/>
            <RegisterFormInputUsername
            name="country"
            onChange={(event)=> handleRegister(event)}
            placeholder="Type country" required 
             list="countriesList"
            />
<datalist id="countriesList">
        <option value="Country 1">ыыс</option>
        <option value="Country 2">сысы</option>
        <option value="Country 1">ыыс</option>
        <option value="Country 2">сысы</option>
        <option value="Country 1">ыыс</option>
        <option value="Country 2">сысы</option>
        <option value="Country 1">ыыс</option>
        <option value="Country 2">сысы</option>
        <option value="Country 1">ыыс</option>
        <option value="Country 2">сысы</option>
        <option value="Country 1">ыыс</option>
        <option value="Country 2">сысы</option>
        <option value="Country 1">ыыс</option>
        <option value="Country 2">сысы</option>
        <option value="Country 1">ыыс</option>
        <option value="Country 2">сысы</option>
    </datalist>
         </RegisterFormInputWrapper>
         <RegisterFormInputWrapper>
            <RegisterFormInputMarkdown>
            City
            </RegisterFormInputMarkdown>
            <ErrorRegisterInformation>
             {isErrorInput.cityInput}
            </ErrorRegisterInformation>
            <RegisterIcon src={City} alt="users"/>
            <RegisterFormInputUsername 
            name="city"
            onChange={(event)=> handleRegister(event)}
            type="city" placeholder="Type city" required />
         </RegisterFormInputWrapper>
         <RegisterFormInputWrapper>
            <RegisterFormInputMarkdown>
           Mobile phone
            </RegisterFormInputMarkdown>
            <ErrorRegisterInformation>
            {isErrorInput.telephoneInput}
            </ErrorRegisterInformation>
          
            <RegisterIcon src={Tel} alt="users"/>
            <RegisterFormInputUsername 
            name="telephone"
            onChange={(event)=> handleRegister(event)}
            type="tel" placeholder="Type mobile phone" required />
         </RegisterFormInputWrapper>
         <RegisterFormInputWrapper>
            <RegisterFormInputMarkdown>
          Email
            </RegisterFormInputMarkdown>
            <ErrorRegisterInformation>
             {isErrorInput.emailInput}
            </ErrorRegisterInformation>
            <RegisterIcon src={Email} alt="users"/>
            <RegisterFormInputUsername 
            name="email"
            onChange={(event)=> handleRegister(event)}
            type="email" placeholder="Type email" required />
         </RegisterFormInputWrapper>
         <RegisterFormInputWrapper>
            <RegisterFormInputMarkdown>
           Password
            </RegisterFormInputMarkdown>
            <ErrorRegisterInformation>
            {isErrorInput.passwordInput}
            </ErrorRegisterInformation>
            <RegisterIcon
            onClick={()=>handlePassword()}
            src={isVisiblePassword ? Eye : EyeCrossed} alt="users"/>
            <RegisterFormInputUsername
onChange={(event)=> handleRegister(event)}
name="password"
            type="password"
            ref={passwordForm}
            placeholder="Type password" required />
         </RegisterFormInputWrapper>
         <Captcha captchaCode={captchaCode} regenerateCaptcha={regenerateCaptcha} enteredCaptchaCode={enteredCaptchaCode} setEnteredCaptchaCode={setEnteredCaptchaCode} setIsCorrectCaptcha={setIsCorrectCaptcha} isCorrectCaptcha={isCorrectCaptcha}  />
<RegisterFormSubmit type="button"
onClick={handleSubmit}
>
    Submit
</RegisterFormSubmit>
<OrHaveAnAccount>
    <Link
    style={{color: "#fff", textDecoration: "none"}}
    to="/sign_in">
Or have an account
    </Link>
</OrHaveAnAccount>
        </RegisterFormWrapper>
        <RegisterFormBaccground />
    </RegisterFormComponent>
      );
}
 
export default RegisterForm; */


import useRegister from "../../hooks/useRegister";
import { useSelector, useDispatch } from 'react-redux';
import { ErrorRegisterInformation, OrHaveAnAccount, RegisterComponentTitle, RegisterFormBaccground, RegisterFormComponent, RegisterFormInputMarkdown, RegisterFormInputUsername, RegisterFormInputWrapper, RegisterFormSubmit, RegisterFormWrapper, RegisterIcon } from "./registerFormStyles";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useCaptcha from "../../hooks/useCaptcha";
import Captcha from "../capcha/capcha";
import Users from "../../assets/users.png"
import Country from "../../assets/country.png"
import City from "../../assets/city.png"
import Tel from "../../assets/tel.png"
import Email from "../../assets/email.png"
import Eye from "../../assets/eye.png"
import EyeCrossed from "../../assets/eye-crossed.png"
import { fetchEmailCodeFunction, setClearCode } from "../../store/slices/emailCode.slice";
import { emailCodeSelector } from "../../store/selectors/emailCode.selector";
const RegisterForm = () => {
    const { captchaCode, regenerateCaptcha, isCorrectCaptcha, setIsCorrectCaptcha } = useCaptcha()
    const [enteredCaptchaCode, setEnteredCaptchaCode] = useState<string>("")
    const { registerState, isVisiblePassword, setIsVisiblePassword, handleRegister, registerForm, isErrorInput, setIsClickedFirst, isClickedFirst } = useRegister()
    const dispatch = useDispatch();
    const emailCode = useSelector(emailCodeSelector)
    const navigate = useNavigate()
    const passwordForm = useRef(null)
    const handleSubmit = () => {
        setIsClickedFirst(true)
        dispatch(fetchEmailCodeFunction(registerState))
    }
    const handlePassword = () => {
        setIsVisiblePassword(prev => !prev)
        passwordForm.current.type = isVisiblePassword ? "text" : "password";
    }
    useEffect(() => {
        if (emailCode.includes("sended")
        ) {
            navigate("/type_code")
            dispatch(setClearCode())
        }
    }, [emailCode])

    return (
        <RegisterFormComponent
        >
            <RegisterFormWrapper
                ref={registerForm}
            >
                <RegisterComponentTitle>
                    Sign up
                </RegisterComponentTitle>
                <RegisterFormInputWrapper>
                    <RegisterFormInputMarkdown>
                        Username
                    </RegisterFormInputMarkdown>
                    <ErrorRegisterInformation>
                        {isErrorInput.usernameInput}
                    </ErrorRegisterInformation>
                    <RegisterIcon src={Users} alt="users" />
                    <RegisterFormInputUsername
                        name="username"
                        onChange={(event) => handleRegister(event)}
                        placeholder="Type username" required />
                </RegisterFormInputWrapper>
                <RegisterFormInputWrapper>
                    <RegisterFormInputMarkdown>
                        Country
                    </RegisterFormInputMarkdown>
                    <ErrorRegisterInformation>
                        {isErrorInput.countryInput}
                    </ErrorRegisterInformation>
                    <RegisterIcon src={Country} alt="users" />
                    <RegisterFormInputUsername
                        name="country"
                        onChange={(event) => handleRegister(event)}
                        placeholder="Type country" required
                        list="countriesList"
                    />
                    <datalist id="countriesList">
                        <option value="Country 1">ыыс</option>
                        <option value="Country 2">сысы</option>
                        <option value="Country 1">ыыс</option>
                        <option value="Country 2">сысы</option>
                        <option value="Country 1">ыыс</option>
                        <option value="Country 2">сысы</option>
                        <option value="Country 1">ыыс</option>
                        <option value="Country 2">сысы</option>
                        <option value="Country 1">ыыс</option>
                        <option value="Country 2">сысы</option>
                        <option value="Country 1">ыыс</option>
                        <option value="Country 2">сысы</option>
                        <option value="Country 1">ыыс</option>
                        <option value="Country 2">сысы</option>
                        <option value="Country 1">ыыс</option>
                        <option value="Country 2">сысы</option>
                    </datalist>
                </RegisterFormInputWrapper>
                <RegisterFormInputWrapper>
                    <RegisterFormInputMarkdown>
                        City
                    </RegisterFormInputMarkdown>
                    <ErrorRegisterInformation>
                        {isErrorInput.cityInput}
                    </ErrorRegisterInformation>
                    <RegisterIcon src={City} alt="users" />
                    <RegisterFormInputUsername
                        name="city"
                        onChange={(event) => handleRegister(event)}
                        type="city" placeholder="Type city" required />
                </RegisterFormInputWrapper>
                <RegisterFormInputWrapper>
                    <RegisterFormInputMarkdown>
                        Mobile phone
                    </RegisterFormInputMarkdown>
                    <ErrorRegisterInformation>
                        {isErrorInput.telephoneInput}
                    </ErrorRegisterInformation>

                    <RegisterIcon src={Tel} alt="users" />
                    <RegisterFormInputUsername
                        name="telephone"
                        onChange={(event) => handleRegister(event)}
                        type="tel" placeholder="Type mobile phone" required />
                </RegisterFormInputWrapper>
                <RegisterFormInputWrapper>
                    <RegisterFormInputMarkdown>
                        Email
                    </RegisterFormInputMarkdown>
                    <ErrorRegisterInformation>
                        {isErrorInput.emailInput}
                    </ErrorRegisterInformation>
                    <RegisterIcon src={Email} alt="users" />
                    <RegisterFormInputUsername
                        name="email"
                        onChange={(event) => handleRegister(event)}
                        type="email" placeholder="Type email" required />
                </RegisterFormInputWrapper>
                <RegisterFormInputWrapper>
                    <RegisterFormInputMarkdown>
                        Password
                    </RegisterFormInputMarkdown>
                    <ErrorRegisterInformation>
                        {isErrorInput.passwordInput}
                    </ErrorRegisterInformation>
                    <RegisterIcon
                        onClick={() => handlePassword()}
                        src={isVisiblePassword ? Eye : EyeCrossed} alt="users" />
                    <RegisterFormInputUsername
                        onChange={(event) => handleRegister(event)}
                        name="password"
                        type="password"
                        ref={passwordForm}
                        placeholder="Type password" required />
                </RegisterFormInputWrapper>
                {/*   <Captcha captchaCode={captchaCode} regenerateCaptcha={regenerateCaptcha} enteredCaptchaCode={enteredCaptchaCode} setEnteredCaptchaCode={setEnteredCaptchaCode} setIsCorrectCaptcha={setIsCorrectCaptcha} isCorrectCaptcha={isCorrectCaptcha}  />  */}
                <RegisterFormSubmit type="button"
                    onClick={handleSubmit}
                >
                    Submit
                </RegisterFormSubmit>
                <OrHaveAnAccount>
                    <Link
                        style={{ color: "#fff", textDecoration: "none" }}
                        to="/sign_in">
                        Or have an account
                    </Link>
                </OrHaveAnAccount>
            </RegisterFormWrapper>
            <RegisterFormBaccground />
        </RegisterFormComponent>
    );
}

export default RegisterForm;