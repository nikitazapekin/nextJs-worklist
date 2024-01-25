import axios from 'axios';
import type { AxiosInstance } from 'axios';
const apiHost = process.env.REACT_APP_API_BASE_URL;
const serverApiInstance: AxiosInstance = axios.create({
baseURL: `localhost://5000/${apiHost}/`,
});
export const serverApi = {
    signUpAction(city: string) {
        console.log("FUNC" + city);
        return serverApiInstance.post('/signin', {
            params: {
                name: "Nik"
            }
        })
        .then(response => {
            console.log("SERVER", response.data);
            return response.data;
        })
        .catch(error => {
            console.error("Error during signInAction:", error);
            throw error; // Optionally rethrow the error
        });
    },
};
 