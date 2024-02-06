import { createSlice } from '@reduxjs/toolkit';

import type {LOADING_STATUS} from '../../constants/loadingStatus';
import type { PayloadAction } from '@reduxjs/toolkit';
 

interface getOffersState {
    data: Array<
{
    id: number, 
    title: string,
    describtion: string,
    location: string,
    salary: string,
    skills: String[],
    workingPerDay: string,
}
    >
	/*username: string ,
	country: string , 
	city: string ,
	telephone: string ,
	email:  string,
	RegistrationData: string ,
	avatar: string ,
	document: string ,
	favouriteOffers:  string ,
	experience: string ,
	lastTimeAtNetwork: string ,
	education: string ,
	describtion:  string, */
}

const initialState: getOffersState = {
	/*username: "" ,
	country: "" , 
	city: "" ,
	telephone: "" ,
	email:  "",
	RegistrationData: "" ,
	avatar: "" ,
	document: "" ,
	favouriteOffers:  "" ,
	experience: "" ,
	lastTimeAtNetwork: "" ,
	education: "" ,
	describtion:  "", */
    data: []
};
interface getOffersProps {
	token: string
 }
 interface getOffersResponse {
/*	username: string ,
	country: string , 
	city: string ,
	telephone: string ,
	email:  string,
	RegistrationData: string ,
	avatar: string ,
	document: string ,
	favouriteOffers:  string ,
	experience: string ,
	lastTimeAtNetwork: string ,
	education: string ,
	describtion:  string, */
    data: Array<
    {
        id: number, 
        title: string,
        describtion: string,
        location: string,
        salary: string,
        skills: String[],
        workingPerDay: string,
    }
        >
  }
export const getOffersSlice = createSlice({
	name: 'pesr',
	initialState,
	reducers: {
		setGetOffersResult: (state, action: PayloadAction<getOffersResponse>) => {
            console.log("SLIXE" +JSON.stringify(action.payload))

            state.data = action.payload.data
            console.log("NEW STATE" +state.data)
			/*state.username= action.payload.username
			state.country= action.payload.country
			state.city= action.payload.city
			state.telephone= action.payload.telephone
			state.email= action.payload.email
			state.RegistrationData= action.payload.RegistrationData
			state.avatar= action.payload.avatar
			state.document= action.payload.document
			state.favouriteOffers= action.payload.favouriteOffers
			state.experience= action.payload.experience
			state.lastTimeAtNetwork= action.payload.lastTimeAtNetwork
			state.education= action.payload.education
			state.describtion= action.payload.describtion */
		},
		setGetOffersLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			// state.emailCodeLoadingStatus = action.payload;
		},
		setClearDocument: (state)=> {
			//state.document=""
		},
		fetchGetOffersFunction: (state, action: PayloadAction<getOffersProps>) => {}, 
	},
});

export const { 
setGetOffersResult,
setClearDocument,
 setGetOffersLoadingStatus, fetchGetOffersFunction
} =
	getOffersSlice.actions;
export default getOffersSlice.reducer;