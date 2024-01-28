import { createSlice } from '@reduxjs/toolkit';
import type { City, CitySearchResponse} from '../../interfaces/city';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { transformCityResponse } from '../../utils/transfrom';
import type { PayloadAction } from '@reduxjs/toolkit';

interface EmailCodeState {
	emailCodeLoadingStatus: LOADING_STATUS;
 code: string
}
const initialState: EmailCodeState = {
   code: "",
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
    code: string | Object 
  }
export const emailCodeSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setEmailCodeResult: (state, action: PayloadAction<emailCodeResponse>) => {
            console.log("ACT"+ JSON.stringify(action.payload))
            state.code = String(action.payload)
			console.log("AUTH AT slice"+(action.payload))
		},
		setEmailCodeLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.emailCodeLoadingStatus = action.payload;
		},
		fetchEmailCodeFunction: (state, action: PayloadAction<emailCodeProps>) => {}, 
	},
});

export const { 
setEmailCodeResult,
 setEmailCodeLoadingStatus, fetchEmailCodeFunction
} =
	emailCodeSlice.actions;
export default emailCodeSlice.reducer;