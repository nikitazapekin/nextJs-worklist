import useRegister from "../../hooks/useRegister";
import { useSelector, useDispatch } from 'react-redux';
import { OrHaveAnAccount, RegisterComponentTitle, RegisterFormBaccground, RegisterFormComponent, RegisterFormInputMarkdown, RegisterFormInputUsername, RegisterFormInputWrapper, RegisterFormSubmit, RegisterFormWrapper } from "./registerFormStyles";
import { Link } from "react-router-dom";
import { fetchAuthFunction } from "../../store/slices/auth.slice";
const RegisterForm = () => {
    const {registerState, setRegisterState}= useRegister()
    const dispatch = useDispatch();
    const handleRegister = (event:  React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegisterState((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    const handleSubmit =()=> {
        dispatch(fetchAuthFunction(registerState))
    }
    return (
    <RegisterFormComponent>
        <RegisterFormWrapper>
            <RegisterComponentTitle>
                Sign up
            </RegisterComponentTitle>
         <RegisterFormInputWrapper>
            <RegisterFormInputMarkdown>
                Username
            </RegisterFormInputMarkdown>
            <RegisterFormInputUsername 
            name="username"
            onChange={(event)=> handleRegister(event)}
            placeholder="Type username" required />
         </RegisterFormInputWrapper>

         <RegisterFormInputWrapper>
            <RegisterFormInputMarkdown>
              Country
            </RegisterFormInputMarkdown>
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
            <RegisterFormInputUsername 
            name="city"
            onChange={(event)=> handleRegister(event)}
            type="city" placeholder="Type city" required />
         </RegisterFormInputWrapper>
         <RegisterFormInputWrapper>
            <RegisterFormInputMarkdown>
           Mobile phone
            </RegisterFormInputMarkdown>
            <RegisterFormInputUsername 
            name="telephone"
            onChange={(event)=> handleRegister(event)}
            type="tel" placeholder="Type mobile phone" required />
         </RegisterFormInputWrapper>



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
 
export default RegisterForm;