import { createSlice } from '@reduxjs/toolkit';

import type {LOADING_STATUS} from '../../constants/loadingStatus';
import type { PayloadAction } from '@reduxjs/toolkit';
 

interface getOfferState {
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
};
interface getOfferProps {
  id: string
 }
  interface  getOfferResponse  {
    data: {

        id: number,
        title: string,
    description: string,
    skills: string[],
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
          //  state.data=action.payload.data
          state.data = {
            ...action.payload.data,
            skills: action.payload.data.skills.map(skill => skill.replace(/[{}]/g, '')),
            image_set: action.payload.data.image_set.map(image => image.replace(/[{}]/g, ''))
        };
            
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