import NavBar from "../../components/NavBar/NavBar";
import SliderCarouselComponent from "../../components/SliderCarousel/SliderCarousel";
import { Global } from "../../components/globalStyles";

const Homepage = () => {
    return ( 
        <>
        <NavBar />
        <Global />
        <SliderCarouselComponent />
        </>
     );
}
 
export default Homepage;