import { createSlice } from '@reduxjs/toolkit';

import type {LOADING_STATUS} from '../../constants/loadingStatus';
import type { PayloadAction } from '@reduxjs/toolkit';
 

interface getUsernameState {
    username: string, 
    error: null | string 
}
const initialState: getUsernameState = {
 username: "",
 error: null
   // data: []
};
interface getUsernameProps {
	token: string
 }
 interface getUsernameResponse {
 /*
    data: Array<
    {
        id: number, 
        title: string,
        describtion: string,
        location: string,
        salary: string,
        skills: String[],
        workingPerDay: string,
    }
        > */
        username: string, 
       // error: null
  }
export const getUsernameSlice = createSlice({
	name: 'pesr',
	initialState,
	reducers: {
		setGetUsernameResult: (state, action: PayloadAction<getUsernameResponse>) => {
            console.log("SLIXE" +JSON.stringify(action.payload))
state.username = action.payload.username
console.log("USERNAME") 
console.log(state.username)
         //   state.data = action.payload.data
            
		},
		setGetUsernameLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			// state.emailCodeLoadingStatus = action.payload;
		},
		setClearDocument: (state)=> {
			//state.document=""
		},
		fetchGetUsernameFunction: (state, action: PayloadAction<getUsernameProps>) => {}, 
       // fetchGetUsernameFunction: (state, action: PayloadAction: string) => {}, 
	},
});

export const { 
setGetUsernameResult,
setClearDocument,
 setGetUsernameLoadingStatus, fetchGetUsernameFunction
} =
	getUsernameSlice.actions;
export default getUsernameSlice.reducer;