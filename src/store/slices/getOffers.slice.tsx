import { createSlice } from '@reduxjs/toolkit';

import type {LOADING_STATUS} from '../../constants/loadingStatus';
import type { PayloadAction } from '@reduxjs/toolkit';
 

interface getOffersState {
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
    >
	 
}
const initialState: getOffersState = {
    data: []
};
interface getOffersProps {
    limit: number, 
    page: number
 }
 interface getOffersResponse {
 
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
        >
  }
export const getOffersSlice = createSlice({
	name: 'pesr',
	initialState,
	reducers: {
		setGetOffersResult: (state, action: PayloadAction<getOffersResponse>) => {
            console.log("SLIXE" +JSON.stringify(action.payload))

            state.data = action.payload.data
            
		},
		setGetOffersLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			// state.emailCodeLoadingStatus = action.payload;
		},
		setClearDocument: (state)=> {
			//state.document=""
		},
		fetchGetOffersFunction: (state, action: PayloadAction<getOffersProps>) => {}, 
	},
});

export const { 
setGetOffersResult,
setClearDocument,
 setGetOffersLoadingStatus, fetchGetOffersFunction
} =
	getOffersSlice.actions;
export default getOffersSlice.reducer;