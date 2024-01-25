/*
"use client"
import { useLogin } from "@/app/hooks/loginHook";
import "@/app/components/loginForm/loginForm"
import React ,  { ChangeEvent }  from "react";
import { useRef } from "react";
//import { fetchOneDevice, registerUser } from "@/app/http/authHttp";
//import Link from "next/link";
import { Link } from "react-router-dom";
const RegisterForm = () => {
    const {setLoginState, loginState} = useLogin()
const form = useRef(null)
    const handleSubmit=()=> {
//fetchOneDevice()
registerUser(loginState)
    }
    const handleChange =(event: ChangeEvent<HTMLInputElement>): void=> {
   setLoginState((prevLoginState) => ({
    ...prevLoginState,
    [event.target.name]: event.target.value,
}));
    }
    return ( 
        <div className="loginForm">
            <h1 className="loginTitle">Sign up</h1>
            <form action=""
ref={form}
             className="loginFormWrapper">
<input name="username" onChange={handleChange} placeholder="type username" type="text" className="loginFormUsername"  required/>
            <input name="email" onChange={handleChange} type="text" placeholder="type email" className="loginFormEmail" required />
            <input name="password" onChange={handleChange}type="text" placeholder="type password" className="loginFormPassword" required />
            <button
            className="loginFormButton"
             onClick={handleSubmit}
             >Submit</button>
             </form>
<div className="loginFormBackground">
</div>
<h2 className="or">
    <Link
    style={{textDecoration: "none", color: "#fff"}}
    href="/profile">
Or sign in
    </Link>
    </h2>
        </div>
     );
}
export default RegisterForm; */

export const LoginForm =()=> {
    return  (
        <LoginForm>
            
        </LoginForm>
    )
}