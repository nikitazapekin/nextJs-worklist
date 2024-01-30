import { useNavigate } from "react-router-dom";
import { LogoutButton, PersonalForm, PersonalFormBackground, PersonalFormWrapper } from "./personalPageFormStyles";

/*import React, { useReducer } from 'react';

// Исходное состояние
const initialState = {
  count: 0,
};

// Редуктор - функция, которая обрабатывает действия и возвращает новое состояние
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const PersonalPageForm = () => {
  // Использование useReducer с передачей редуктора и начального состояния
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default PersonalPageForm;
  */

// sessionStorage.removeItem('jwtToken');
 import { useEffect } from "react";
 import { useSelector, useDispatch } from 'react-redux';
import useJwt from "../../hooks/useJwt";
import { fetchPersonalInformationFunction } from "../../store/slices/personalInformation.slice";
 const PersonalPageForm = () => {
   const dispatch = useDispatch()
   const {jwtToken} =useJwt()
    const navigate = useNavigate()
useEffect(()=> {
  const token= jwtToken
  if(token!=null && token.length>1){

    dispatch(fetchPersonalInformationFunction({token}))
  }
}, [jwtToken])
const handleLogout = () => {
navigate("/sign_in")
sessionStorage.removeItem('jwtToken');
    }
    return (
       <PersonalForm>
        <PersonalFormWrapper>
<LogoutButton
onClick={handleLogout}
>
    Log out
</LogoutButton>
        </PersonalFormWrapper>
        <PersonalFormBackground />
       </PersonalForm>
      );
}
 
export default PersonalPageForm;
