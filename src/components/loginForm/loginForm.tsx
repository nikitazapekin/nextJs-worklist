import { useLogin } from "../../hooks/useLogin";
import { ErrorLogin, OrHaveAnAccount, ErrorRegisterInformation, RegisterComponentTitle, RegisterFormBaccground, RegisterFormComponent, RegisterFormInputMarkdown, RegisterFormInputUsername, RegisterFormInputWrapper, RegisterFormSubmit, RegisterFormWrapper } from "./loginFormStyles";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { loginLoadingStatusSelector, loginSelector } from "../../store/selectors/login.selector";
const LoginForm = () => {
    const {handleClick, handleRegister, loginForm, passwordForm, isErrorInput}= useLogin()
    const loginLoadingStatus  = useSelector(loginLoadingStatusSelector)
    return (
    <RegisterFormComponent>
        <RegisterFormWrapper
        >
            <RegisterComponentTitle>
                Sign in
            </RegisterComponentTitle>
            <RegisterFormInputWrapper>
            <RegisterFormInputMarkdown>
          Email
            </RegisterFormInputMarkdown>
            <ErrorRegisterInformation>
       {isErrorInput.emailInput}
            </ErrorRegisterInformation>
            <RegisterFormInputUsername 
            ref={loginForm}
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
            <RegisterFormInputUsername
onChange={(event)=> handleRegister(event)}
name="password"
ref={passwordForm}
            type="password"
            placeholder="Type password" required />
         </RegisterFormInputWrapper>
         <ErrorLogin 
         display={loginLoadingStatus=='error' ? "block" : "none"}>
            Please check your email and password correctness
         </ErrorLogin>
<RegisterFormSubmit type="button"
onClick={handleClick}
>
    Submit
</RegisterFormSubmit>
<OrHaveAnAccount>
    <Link
    style={{color: "#fff", textDecoration: "none"}}
    to="/sign_up">
Or sign up
    </Link>
</OrHaveAnAccount>
        </RegisterFormWrapper>
        <RegisterFormBaccground />
    </RegisterFormComponent>
      );
}
export default LoginForm;