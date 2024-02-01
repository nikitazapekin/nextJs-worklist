import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import type { PayloadAction } from '@reduxjs/toolkit';

interface yourInfornationState {
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
	errorMessage:  string
}
const initialState: yourInfornationState = {
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
	errorMessage: ""
};
interface yourInformationProps {
	token: string
 }
 interface yourInformationResponse {
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
	errorMessage: string
  }
  interface YourInformationErrorMessage {
	errorMessage: string 
  }
export const yourInformationSlice = createSlice({
	name: 'pesr',
	initialState,
	reducers: {
		setYourInformationResult: (state, action: PayloadAction<yourInformationResponse>) => {
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
		//	state.errorMessage=action.payload.errorMessage
		},
		setYourInformationLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			//state.emailCodeLoadingStatus = action.payload;
		},
		setYourInformationErrorMessage: (state, action: PayloadAction<YourInformationErrorMessage>) => {
			console.log("ERRR SLICE" + action.payload)
			if(typeof action.payload=="string" ){

				state.errorMessage= action.payload
			}
			console.log("Errr state" +JSON.stringify(state))
			console.log("Errr msg" +state)
		},
		fetchYourInformationFunction: (state, action: PayloadAction<yourInformationProps>) => {}, 
	},
});

export const { 
	setYourInformationErrorMessage,
setYourInformationResult,
 setYourInformationLoadingStatus, fetchYourInformationFunction
} =
	yourInformationSlice.actions;
export default yourInformationSlice.reducer;