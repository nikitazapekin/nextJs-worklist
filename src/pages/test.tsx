import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const TestPage = () => {
    const {id} = useParams()
    console.log("IDDDDDDDDDDDDDDDDD"+id)
    return (  
<>
<NavBar />
</>

    );
}
 
export default TestPage;