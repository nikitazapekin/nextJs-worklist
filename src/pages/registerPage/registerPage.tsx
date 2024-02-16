import  Footer  from "../../components/footer/footer";
import NavBar from "../../components/NavBar/NavBar";
import { Global } from "../../components/globalStyles";
import RegisterForm from "../../components/registerForm/registerForm";
import { Layout } from "../PageStyles"
import { LayoutWrapper } from "../PageStyles"
const RegisterPage = () => {
    return (
        <>
        <NavBar />
        <Global />
        <RegisterForm />
        <Footer />
      {/* 
        <LayoutWrapper>
      <Layout isBlack={false}>
        </Layout>
    </LayoutWrapper> */}
        </>
      );
}
export default RegisterPage;