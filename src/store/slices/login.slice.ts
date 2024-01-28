import { createSlice } from '@reduxjs/toolkit';
import type { City, CitySearchResponse} from '../../interfaces/city';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { transformCityResponse } from '../../utils/transfrom';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
	loginLoadingStatus: LOADING_STATUS;
 token: string
}
const initialState: LoginState = {
    token: "",
	loginLoadingStatus: LOADING_STATUS.IDLE,
};
interface LoginProps {
    email: string,
    password: string
 }
 interface LoginResponse {
    token: string
  }
  
export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setLoginResult: (state, action: PayloadAction<LoginResponse>) => {
            console.log("ACT"+ JSON.stringify(action.payload))
            state.token = String(action.payload)
			console.log("AUTH AT slice"+(action.payload))
		},
		setLoginLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.loginLoadingStatus = action.payload;
		},
		fetchLoginFunction: (state, action: PayloadAction<LoginProps>) => {}, 
	},
});

export const { 
setLoginResult,
 setLoginLoadingStatus, fetchLoginFunction
} =
	loginSlice.actions;
export default loginSlice.reducer;