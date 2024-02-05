import axios from "axios";
import useJwt from "../hooks/useJwt";
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, jwtToken: string) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      formData.append('jwtToken', jwtToken);
      console.log("FORMM" +formData)
      const response = await axios.post("http://localhost:5000/testMultiple", formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  export default handleSubmit