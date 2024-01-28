import { createSlice } from '@reduxjs/toolkit';
import type { City, CitySearchResponse} from '../../interfaces/city';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { transformCityResponse } from '../../utils/transfrom';
import type { PayloadAction } from '@reduxjs/toolkit';
 
interface AuthState {
	//currentCity: City | null;
    token: string;
	citySearchResult: string | null;
	searchCitiesLoadingStatus: LOADING_STATUS;
	authResponse: string
}

const initialState: AuthState = {
	//currentCity: null,
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
    password: string
 }
 interface AuthResponse {
    authResponse: string
  }
  
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCurrentAuth: (state, action: PayloadAction<City>) => {
            console.log("ACT" +action.payload)
		},
		setAuthSearchResult: (state, action: PayloadAction<AuthResponse>) => {
			state.authResponse= action.payload.authResponse
			console.log("AUTH AT slice"+state.authResponse)
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
setAuthSearchResult,
  setCurrentAuth, setAuthLoadingStatus, setAuth, fetchAuthFunction
} =
	authSlice.actions;
export default authSlice.reducer;