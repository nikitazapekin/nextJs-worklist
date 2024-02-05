import { useLogin } from "../../hooks/useLogin";
import { ErrorLogin, RegisterIcon, OrHaveAnAccount, ErrorRegisterInformation, RegisterComponentTitle, RegisterFormBaccground, RegisterFormComponent, RegisterFormInputMarkdown, RegisterFormInputUsername, RegisterFormInputWrapper, RegisterFormSubmit, RegisterFormWrapper } from "./loginFormStyles";
import { Link, useNavigate } from "react-router-dom";
import Email from "../../assets/email.png"
import Eye from "../../assets/eye.png"
import EyeCrossed from "../../assets/eye-crossed.png"
import { useSelector } from 'react-redux';
import { loginLoadingStatusSelector } from "../../store/selectors/login.selector";
import { memo, useState } from "react";
const LoginForm = memo(() => {
    const { handleClick, handleRegister, loginForm, passwordForm, isErrorInput } = useLogin()
    const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false)
    const handlePassword = () => {
        setIsVisiblePassword(prev => !prev)
        if (passwordForm.current) { 

            passwordForm.current.type = isVisiblePassword ? "text" : "password";
        }
    }
    const loginLoadingStatus = useSelector(loginLoadingStatusSelector)
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
                    <RegisterIcon src={Email} alt="users" />
                    <RegisterFormInputUsername
                        ref={loginForm}
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
                        ref={passwordForm}
                        type="password"
                        placeholder="Type password" required />
                </RegisterFormInputWrapper>
                <ErrorLogin
                    display={loginLoadingStatus == 'error' ? "block" : "none"}>
                    Please check your email and password correctness
                </ErrorLogin>
                <RegisterFormSubmit type="button"
                    onClick={handleClick}
                >
                    Submit
                </RegisterFormSubmit>
                <OrHaveAnAccount>
                    <Link
                        style={{ color: "#fff", textDecoration: "none" }}
                        to="/sign_up">
                        Or sign up
                    </Link>
                </OrHaveAnAccount>
            </RegisterFormWrapper>
            <RegisterFormBaccground />
        </RegisterFormComponent>
    );
})
export default LoginForm;