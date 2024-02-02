import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import type { PayloadAction } from '@reduxjs/toolkit';

interface personalInfornationState {
	username: string ,
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
	describtion:  string,
}
const initialState: personalInfornationState = {
	username: "" ,
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
	describtion:  "",
};
interface personalInformationProps {
	token: string
 }
 interface personalInformationResponse {
	username: string ,
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
	describtion:  string,
  }
export const personalInformationSlice = createSlice({
	name: 'pesr',
	initialState,
	reducers: {
		setPersonalInformationResult: (state, action: PayloadAction<personalInformationResponse>) => {
			state.username= action.payload.username
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
			state.describtion= action.payload.describtion
		},
		setPersonalInformationLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			//state.emailCodeLoadingStatus = action.payload;
		},
		setClearDocument: (state)=> {
			state.document=""
		},
		fetchPersonalInformationFunction: (state, action: PayloadAction<personalInformationProps>) => {}, 
	},
});

export const { 
setPersonalInformationResult,
setClearDocument,
 setPersonalInformationLoadingStatus, fetchPersonalInformationFunction
} =
	personalInformationSlice.actions;
export default personalInformationSlice.reducer;