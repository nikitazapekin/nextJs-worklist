import { createSlice } from '@reduxjs/toolkit';

import type {LOADING_STATUS} from '../../constants/loadingStatus';
import type { PayloadAction } from '@reduxjs/toolkit';
 

interface getOfferState {
 /*   data: Array<
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
	  */
     data: {

         id: number,
         title: string,
    description: string,
    skills: String[],
    workingPerDay: string,
    location: string,
    salary: string,
    owner: string,
    image_set: String[],
    data_of_publication:  string,
    last_time_of_rise: string
}
}
const initialState: getOfferState = {
    data: {
        
        id: 0,
        title: "",
    description: "",
    skills: [],
    workingPerDay: "",
    location: "",
    salary: "",
    owner: "",
    image_set: [],
    data_of_publication:  "",
    last_time_of_rise: ""
}
   // data: []
};
interface getOfferProps {
  id: string
 }

 /*
 interface getOfferResponse {
 
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
  } */

  interface  getOfferResponse  {
    data: {

        id: number,
        title: string,
    description: string,
    skills: String[],
    workingPerDay: string,
    location: string,
    salary: string,
    owner: string,
    image_set: String[],
    data_of_publication:  string,
    last_time_of_rise: string
}
}

export const getOfferSlice = createSlice({
	name: 'pesr',
	initialState,
	reducers: {
		setGetOfferResult: (state, action: PayloadAction<getOfferResponse>) => {
            console.log("OFFFFFFFFFFFFFFFFFFFFEEEEEEEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRRRRRRR" +JSON.stringify(action.payload))
            console.log("WORKK" +action.payload.data.workingPerDay)
            state.data.data_of_publication = action.payload.data.data_of_publication
          //  state.data = action.payload.data
            
		},
		setGetOfferLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			// state.emailCodeLoadingStatus = action.payload;
		},
		setClearDocument: (state)=> {
			//state.document=""
		},
		fetchGetOfferFunction: (state, action: PayloadAction<getOfferProps>) => {}, 
	},
});

export const { 
setGetOfferResult,
setClearDocument,
 setGetOfferLoadingStatus, fetchGetOfferFunction
} =
	getOfferSlice.actions;
export default getOfferSlice.reducer;