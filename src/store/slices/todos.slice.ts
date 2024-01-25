import { createSlice } from '@reduxjs/toolkit';
import type { City, CitySearchResponse} from '../../interfaces/city';
//import type { City, CitySearchResponse } from '@interfaces';
//import { LOADING_STATUS } from '@constants';
import { LOADING_STATUS } from '../../constants/loadingStatus';
//import { transformCityResponse } from '@utils';
import { transformCityResponse } from '../../utils/transfrom';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Todos } from '../../api';

interface TodosState {
    selectedTodo: string;
/*	currentCity: City | null;
	citySearchResult: City[] | null; */
	searchCitiesLoadingStatus: LOADING_STATUS; 
}

const initialState: TodosState = {
	//currentCity: null,
	//citySearchResult: null,
    selectedTodo: "",
	searchCitiesLoadingStatus: LOADING_STATUS.IDLE,
};
export interface TodoType {
   
    userId: number,
    id: number,
    title: string,
    completed:boolean

}
export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
setTodo: (state, action: PayloadAction<TodoType>)=> {
console.log("ACTION" +action.payload)
},
fetchTodo: (state, action: PayloadAction<string>) => {}
	/*	setCurrentCity: (state, action: PayloadAction<City>) => {
            console.log("ACT" +action.payload)
			state.currentCity = action.payload;
		}, */
	/*	setSearchCitiesLoadingStatus: (state, action: PayloadAction<LOADING_STATUS>) => {
			state.searchCitiesLoadingStatus = action.payload;
		},
		setCitiesSearchResult: (state, action: PayloadAction<CitySearchResponse>) => {
			state.citySearchResult = action.payload.results?.map(transformCityResponse) ?? null;
		},
		fetchCityByName: (state, action: PayloadAction<string>) => {},  */
	},
});

export const { 
    setTodo, fetchTodo
   // setTodos
  //  setCurrentCity, setSearchCitiesLoadingStatus, setCitiesSearchResult, fetchCityByName 
} =
	todoSlice.actions;
export default todoSlice.reducer;