import axios from 'axios';
import type { AxiosInstance } from 'axios';
const apiHost = process.env.REACT_APP_API_BASE_URL;
const offersApiInstance: AxiosInstance = axios.create({
    baseURL: `http://localhost:5000/${apiHost}/`,
});
interface RegProps {
    token: string
}
interface EditDataProps {
    education: string,
    about: string;
    experience: string;
    email: string;
    password: string;
    telephone: string;
    country: string;
    city: string;
    document: string;
    token: string;
}

interface AvatarProps {

    formData: any
}
interface CreateOfferProps {
    title: string,
    describtion: string,
    skills: String[], 
    workingPerDay: string,
    location: string,
       salary: string,
       token: string,
     
}
export const offersApi = {
getOffersAction(){
    return offersApiInstance.get(`/getOffers`)
 },
   setAvatar(EditData: AvatarProps) {
    console.log("EDIT DATA" +JSON.stringify(EditData))

    },

};
