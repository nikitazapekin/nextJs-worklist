import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import type { PayloadAction } from '@reduxjs/toolkit';

interface setAvatarState {
avatar: string
}
const initialState: setAvatarState = {
	avatar: ""
};
interface setAvatarProps {
	token: string,
    avatar: string
 }
 interface setAvatarResponse {
	avatar: string
  }
export const setAvatarSlice = createSlice({
	name: 'pesr',
	initialState,
	reducers: {
		setAvatarResult: (state, action: PayloadAction<setAvatarResponse>) => {
            console.log("ACT"+ JSON.stringify(action.payload))
			
		},
		setAvatarLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			//state.emailCodeLoadingStatus = action.payload;
		},
		fetchAvatarFunction: (state, action: PayloadAction<setAvatarProps>) => {}, 
	},
});

export const { 
setAvatarResult,
 setAvatarLoadingStatus, fetchAvatarFunction
} =
	setAvatarSlice.actions;
export default setAvatarSlice.reducer;