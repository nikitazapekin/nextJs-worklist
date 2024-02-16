import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/footer";
import { Global } from "../../components/globalStyles";
import YourOffersListComponent from "../../components/yourOffersListComponent/yourOffersListComponent";
import { Layout, LayoutWrapper } from "../PageStyles";
const YourOffersPage = () => {
    return ( 
        <>
        {/*
        
        <LayoutWrapper>
        <Layout isBlack={true}>
        </Layout>
        </LayoutWrapper>
    */}

        <NavBar />

<YourOffersListComponent />
<Global />
        <Footer />
        </>
     );
}
 
export default YourOffersPage;