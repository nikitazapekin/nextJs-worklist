import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import type { PayloadAction } from '@reduxjs/toolkit';
 
interface AuthState {
	//currentCity: City | null;
	username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    password: string,
    token: string;
	citySearchResult: string | null;
	searchCitiesLoadingStatus: LOADING_STATUS;
	authResponse: string
}

const initialState: AuthState = {
	//currentCity: null,
	username: "",
    country: "",
    city: "",
    telephone: "",
    email: "",
    password: "",
    token: "",
	citySearchResult: null,
	searchCitiesLoadingStatus: LOADING_STATUS.IDLE,
	authResponse:""
};
interface AuthProps {
    username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    password: string,
	
 }
 interface AuthResponse {
    authResponse: string
  }
  
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setPersonalData(state, action: PayloadAction<AuthProps>){
			console.log("PERS" +JSON.stringify(action.payload))
state.username=action.payload.username
state.country= action.payload.country,
state.city= action.payload.city,
 state.email= action.payload.email,
  state.password= action.payload.password, 
  state.telephone= action.payload.telephone
		},
	 
		setAuthSearchResult: (state, action: PayloadAction<AuthResponse>) => {
			console.log("auth slice response" +action.payload.authResponse )
			state.authResponse= action.payload.authResponse
		},
		setAuthLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.searchCitiesLoadingStatus = action.payload;
		},
		setAuth: (state, action: PayloadAction<string>) => {
            state.token=  action.payload
		},
		fetchAuthFunction: (state, action: PayloadAction<AuthProps>) => {}, 
	},
});

export const { 
setAuthSearchResult, setPersonalData,
  setAuthLoadingStatus, setAuth, fetchAuthFunction
} =
	authSlice.actions;
export default authSlice.reducer;