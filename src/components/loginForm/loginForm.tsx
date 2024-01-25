import { useLogin } from "../../hooks/loginHook";
 
import { OrHaveAnAccount, RegisterComponentTitle, RegisterFormBaccground, RegisterFormComponent, RegisterFormInputMarkdown, RegisterFormInputUsername, RegisterFormInputWrapper, RegisterFormSubmit, RegisterFormWrapper } from "./loginFormStyles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCityByName } from "../../store";
 //import city
const LoginForm = () => {

//const {} = useSelector(city)
    const dispatch = useDispatch();

	/*useEffect(() => {
		if (selectedLocation !== null) {
			dispatch(fetchHourlyWeather(selectedLocation));
		}
	}, [selectedLocation]); */

const handleClick=() => {
    console.log("handle click")
dispatch(fetchCityByName("Minsk"))
}
fetchCityByName("Minsk")
   const {loginState, setLoginState}= useLogin()
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