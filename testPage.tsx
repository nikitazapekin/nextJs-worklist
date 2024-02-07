import { useParams } from "react-router-dom";

const TestPahe = () => {
    const {id} =useParams()
    return ( 

        <>TESTTT {id}</>
     );
}
 
export default TestPahe;