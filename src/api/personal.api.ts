import axios from 'axios';
import type { AxiosInstance } from 'axios';
const apiHost = process.env.REACT_APP_API_BASE_URL;
const serverApiInstance: AxiosInstance = axios.create({
baseURL: `http://localhost:5000/${apiHost}/`,
});
interface RegProps {
   token: string
}
export const personalApi = {
    PersonalInformationAction (regData: RegProps) {
         console.log("REEEEEEEEEE"+JSON.stringify(regData))
         return serverApiInstance.get(`/getPersonalInformation?token=${regData.token}`, {
       //  return serverApiInstance.get(`/getPersonalInformation?token=${regData.token}}`, {
           //  params: {
        //  token: regData.token
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
 }; 
/*
export const personalApi = {
   PersonalInformationAction (regData: RegProps) {
        console.log("REEEEEEEEEE"+JSON.stringify(regData))
        return serverApiInstance.post('/getPersonalInformation', {
          //  params: {
         token: regData.token
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

   
}; */
 