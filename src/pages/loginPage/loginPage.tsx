import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/footer/footer"
import { Global } from "../../components/globalStyles"
import LoginForm from "../../components/loginForm/loginForm"
import { Layout } from "../PageStyles"
import { LayoutWrapper } from "../PageStyles"

const LoginPage = () => {
    return (
        <>
                <NavBar />
                    <Global />
                    <LoginForm />
                <Footer />
            {/*
            <LayoutWrapper>
            </Layout>
            <Layout isBlack={false}>
            </LayoutWrapper>
            
    */}
        </>
    )
}
export default LoginPage