import axios from 'axios';
import type { AxiosInstance } from 'axios';
const apiHost = process.env.REACT_APP_API_BASE_URL;
const serverApiInstance: AxiosInstance = axios.create({
baseURL: `http://localhost:5000/${apiHost}/`,
});
interface LoginProps {
    email: string,
    password: string
}
interface RegProps {
    username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    password: string,
    code: string,
}
interface ReggProps {
    username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    password: string,
   
}
export const serverApi = {
    signUpAction(regData: RegProps) {
        console.log("REEEEEEEEEE"+JSON.stringify(regData))
        return serverApiInstance.post('/signup', {
          //  params: {
                username: regData.username,
                country: regData.country,
                city: regData.city,
                telephone: regData.telephone,
                email: regData.email,
                password: regData.password,
                code: regData.code
        //    }
        })
        .then(response => {
            console.log("SERVER", response.data);
            return response.data;
        })
        .catch(error => {
            console.error("Error during signInAction:", error);
            const fullURL = serverApiInstance.defaults.baseURL + '/signup';
            throw error; 
        });
    },

    signInAction(regData: LoginProps) {
        console.log("REEEEEEEEEE"+JSON.stringify(regData))
        return serverApiInstance.post('/signin', {
                email: regData.email,
                password: regData.password
        })
        .then(response => {
            console.log("SERVER", response.data);
            return response.data;
        })
        .catch(error => {
            console.error("Error during signInAction:", error);
            const fullURL = serverApiInstance.defaults.baseURL + '/signup';
            throw error; 
        });
    },
   getEmailCodeAction(regData: ReggProps) {
        console.log("REEEEEEEEEE"+JSON.stringify(regData))
        return serverApiInstance.post('/sendCode', {
            username: regData.username,
            country: regData.country,
            city: regData.city,
            telephone: regData.telephone,
            email: regData.email,
            password: regData.password
              
        })
        .then(response => {
            console.log("SERVER", response.data);
            return response.data;
        })
        .catch(error => {
            console.error("Error during signInAction:", error);
            const fullURL = serverApiInstance.defaults.baseURL + '/sendCode';
            console.log("full" +fullURL)
            throw error; 
        });
    },
};
 