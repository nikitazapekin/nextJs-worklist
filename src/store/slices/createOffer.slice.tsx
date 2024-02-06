import { createSlice } from '@reduxjs/toolkit';

import type {LOADING_STATUS} from '../../constants/loadingStatus';
import type { PayloadAction } from '@reduxjs/toolkit';

interface createOfferState {
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
const initialState: createOfferState = {
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
interface createOfferProps {
	token: string
 }
 interface createOfferResponse {
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
export const createOfferSlice = createSlice({
	name: 'pesr',
	initialState,
	reducers: {
		setCreateOfferResult: (state, action: PayloadAction<createOfferResponse>) => {
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
		setCreateOfferLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			// state.emailCodeLoadingStatus = action.payload;
		},
		setClearDocument: (state)=> {
			state.document=""
		},
		fetchCreateOfferFunction: (state, action: PayloadAction<createOfferProps>) => {}, 
	},
});

export const { 
setCreateOfferResult,
setClearDocument,
 setCreateOfferLoadingStatus, fetchCreateOfferFunction
} =
	createOfferSlice.actions;
export default createOfferSlice.reducer;