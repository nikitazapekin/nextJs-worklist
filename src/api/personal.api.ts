import axios from 'axios';
import type { AxiosInstance } from 'axios';
const apiHost = process.env.REACT_APP_API_BASE_URL;
const serverApiInstance: AxiosInstance = axios.create({
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

export const personalApi = {
    PersonalInformationAction(regData: RegProps) {
        console.log("REEEEEEEEEE" + JSON.stringify(regData))
        return serverApiInstance.get(`/getPersonalInformation?token=${regData.token}`, {
        })
            .then(response => {
                console.log("SERVER", response.data);
                return response.data;
            })
            .catch(error => {
                console.error("Error during signInAction:", error);
                throw error;
            });
    },
    EditPersonalInformation(EditData: EditDataProps) {
        return serverApiInstance.post(`/getPersonalInformation/editPersonalData?token=${EditData.token}`, {
            education: EditData.token,
            about: EditData.about,
            experience: EditData.experience,
            email: EditData.email,
            password: EditData.password,
            telephone: EditData.telephone,
            country: EditData.country,
            city: EditData.city,
            document: EditData.document,
            token: EditData.token,
        }
        )
    },
/*
removePersonalResume(EditData) {

}, */
   setAvatar(EditData: AvatarProps) {
    console.log("EDIT DATA" +JSON.stringify(EditData))

    },

};
