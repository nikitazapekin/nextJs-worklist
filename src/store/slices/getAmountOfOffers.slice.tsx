import { createSlice } from '@reduxjs/toolkit';

import type {LOADING_STATUS} from '../../constants/loadingStatus';
import type { PayloadAction } from '@reduxjs/toolkit';
 

interface getAmountOfOffersState {
  /*  data: Array<
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
    data: {
        amountOfOffers: number,
        error: null
    }
	 
}
const initialState: getAmountOfOffersState = {
   // data: []
   data: {
    amountOfOffers: 0,
    error: null
}
};
interface getAmountOfOffersProps {
    limit: number, 
    page: number
 }
 interface AmountOfUsersTypes {
    data: {
         amountOfOffers: string,
         error: null | string
  }
 }

export const getAmountOfOffersSlice = createSlice({
	name: 'pesr',
	initialState,
	reducers: {
		setGetAmountOfOffersResult: (state, action: PayloadAction<AmountOfUsersTypes>) => {
            console.log("AMOUNT IF OFFERS" +JSON.stringify(action.payload))
console.log(action.payload.data)
state.data.amountOfOffers = Number(action.payload.data.amountOfOffers)
action.payload.data.error = action.payload.data.error
 
         console.log(state.data.amountOfOffers)
            
		},
		setGetAmountOfOffersLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			// state.emailCodeLoadingStatus = action.payload;
		},
		setClearDocument: (state)=> {
			//state.document=""
		},
		fetchGetAmountOfOffersFunction: (state, action: PayloadAction<getAmountOfOffersProps>) => {}, 
	},
});

export const { 
setGetAmountOfOffersResult,
setClearDocument,
 setGetAmountOfOffersLoadingStatus, fetchGetAmountOfOffersFunction
} =
	getAmountOfOffersSlice.actions;
export default getAmountOfOffersSlice.reducer;