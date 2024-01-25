import { createSlice } from '@reduxjs/toolkit';
import type { City, CitySearchResponse} from '../../interfaces/city';
//import type { City, CitySearchResponse } from '@interfaces';
//import { LOADING_STATUS } from '@constants';
import { LOADING_STATUS } from '../../constants/loadingStatus';
//import { transformCityResponse } from '@utils';
import { transformCityResponse } from '../../utils/transfrom';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Todos } from '../../api';

interface CityState {
	currentCity: City | null;
	citySearchResult: City[] | null;
	searchCitiesLoadingStatus: LOADING_STATUS;
}

const initialState: CityState = {
	currentCity: null,
	citySearchResult: null,
	searchCitiesLoadingStatus: LOADING_STATUS.IDLE,
};
export interface TodoType {
   
        userId: number,
        id: number,
        title: string,
        completed:boolean
    
}
export const citySlice = createSlice({
	name: 'city',
	initialState,
	reducers: {
     /*   setTodos: (state, action: PayloadAction<Todos>) => {
			//state.currentCity = action.payload;
		}, */
		//setTodos: (state, action: PayloadAction<LOADING_STATUS>) => {
		//	state.searchCitiesLoadingStatus = action.payload;
	//	},
		//setTodos: (state, action: PayloadAction<CitySearchResponse>) => {
			//state.citySearchResult = action.payload.results?.map(transformCityResponse) ?? null;
		//},
		setCurrentCity: (state, action: PayloadAction<City>) => {
            console.log("ACT" +action.payload)
			state.currentCity = action.payload;
		},
		setSearchCitiesLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.searchCitiesLoadingStatus = action.payload;
		},
		setCitiesSearchResult: (state, action: PayloadAction<CitySearchResponse>) => {
			state.citySearchResult = action.payload.results?.map(transformCityResponse) ?? null;
		},
		fetchCityByName: (state, action: PayloadAction<string>) => {}, 
	},
});

export const { 
   // setTodos
    setCurrentCity, setSearchCitiesLoadingStatus, setCitiesSearchResult, fetchCityByName 
} =
	citySlice.actions;
export default citySlice.reducer;