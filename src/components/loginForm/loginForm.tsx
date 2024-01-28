import { useLogin } from "../../hooks/loginHook";
import { ErrorLogin, OrHaveAnAccount, RegisterComponentTitle, RegisterFormBaccground, RegisterFormComponent, RegisterFormInputMarkdown, RegisterFormInputUsername, RegisterFormInputWrapper, RegisterFormSubmit, RegisterFormWrapper } from "./loginFormStyles";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCityByName } from "../../store";
import { fetchAuthFunction } from "../../store/slices/auth.slice";
import { fetchLoginFunction } from "../../store/slices/login.slice";
import { loginLoadingStatusSelector, loginSelector } from "../../store/selectors/login.selector";
import { useEffect } from "react";
const LoginForm = () => {
    const {loginState, setLoginState}= useLogin()
    const token = useSelector(loginSelector)
    const loginLoadingStatus  = useSelector(loginLoadingStatusSelector)
    console.log("LOAd status" +loginLoadingStatus)
    const navigate=useNavigate()
    console.log("TOKENN " +token)
    useEffect(()=> {
        if(token.length>1){
            sessionStorage.setItem('jwtToken', token);
            navigate("/")
        }
    }, [token])
    const dispatch = useDispatch();
const handleClick=() => {
  dispatch(fetchLoginFunction(loginState))
}
    const handleRegister = (event:  React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginState((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    return (
    <RegisterFormComponent>
        <RegisterFormWrapper>
            <RegisterComponentTitle>
                Sign in
            </RegisterComponentTitle>
            <RegisterFormInputWrapper>
            <RegisterFormInputMarkdown>
          Email
            </RegisterFormInputMarkdown>
            <RegisterFormInputUsername 
            name="email"
            onChange={(event)=> handleRegister(event)}
            type="email" placeholder="Type email" required />
         </RegisterFormInputWrapper>
         <RegisterFormInputWrapper>
            <RegisterFormInputMarkdown>
           Password
            </RegisterFormInputMarkdown>
            <RegisterFormInputUsername
onChange={(event)=> handleRegister(event)}
name="password"
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