import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import type { PayloadAction } from '@reduxjs/toolkit';

interface personalInfornationState {
	emailCodeLoadingStatus: LOADING_STATUS;
    finalRegisterMessage: string
}
const initialState: personalInfornationState = {
 finalRegisterMessage: "",
	emailCodeLoadingStatus: LOADING_STATUS.IDLE,
};
interface personalInformationProps {
  /*  username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    password: string */
	token: string
 }
 interface personalInformationResponse {
    finalRegisterMessage: string 
  }
export const personalInformationSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setPersonalInformationResult: (state, action: PayloadAction<personalInformationResponse>) => {
            console.log("ACT"+ JSON.stringify(action.payload))
            state.finalRegisterMessage = String(action.payload.finalRegisterMessage)
			console.log("finalRegisterMessageSelectorrrrrrrrrrrrrrrr "+JSON.stringify(state.finalRegisterMessage))
		},
		setPersonalInformationLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.emailCodeLoadingStatus = action.payload;
		},
		fetchPersonalInformationFunction: (state, action: PayloadAction<personalInformationProps>) => {}, 
	},
});

export const { 
setPersonalInformationResult,
 setPersonalInformationLoadingStatus, fetchPersonalInformationFunction
} =
	personalInformationSlice.actions;
export default personalInformationSlice.reducer;