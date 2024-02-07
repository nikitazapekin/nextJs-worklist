import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/footer/footer"
import { Global } from "../../components/globalStyles"
import LoginForm from "../../components/loginForm/loginForm"
 

const LoginPage= ()=> {
    return (
        <>
        <NavBar />
 <Global />
<LoginForm />
<Footer />
        </>
    )
}
export default LoginPage