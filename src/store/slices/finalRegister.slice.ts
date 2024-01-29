import { createSlice } from '@reduxjs/toolkit';
import type { City, CitySearchResponse} from '../../interfaces/city';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { transformCityResponse } from '../../utils/transfrom';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FinalRegisterState {
	emailCodeLoadingStatus: LOADING_STATUS;
    finalRegisterMessage: string
}
const initialState: FinalRegisterState = {
 finalRegisterMessage: "",
	emailCodeLoadingStatus: LOADING_STATUS.IDLE,
};
interface emailCodeProps {
    username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    password: string
 }
 interface emailCodeResponse {
    finalRegisterMessage: string 
  }
export const emailCodeSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setFinalRegisterResult: (state, action: PayloadAction<emailCodeResponse>) => {
            console.log("ACT"+ JSON.stringify(action.payload))
            state.finalRegisterMessage = String(action.payload.finalRegisterMessage)
			console.log("finalRegisterMessageSelectorrrrrrrrrrrrrrrr "+JSON.stringify(state.finalRegisterMessage))
		},
		setFinalRegisterLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.emailCodeLoadingStatus = action.payload;
		},
		fetchFinalRegisterFunction: (state, action: PayloadAction<emailCodeProps>) => {}, 
	},
});

export const { 
setFinalRegisterResult,
 setFinalRegisterLoadingStatus, fetchFinalRegisterFunction
} =
	emailCodeSlice.actions;
export default emailCodeSlice.reducer;