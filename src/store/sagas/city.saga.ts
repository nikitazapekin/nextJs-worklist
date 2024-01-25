import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { CitySearchResponse } from '../../interfaces/city';
import { openMeteoApi } from '../../api';
import { 
    //setTodos
    fetchCityByName, setCitiesSearchResult, setSearchCitiesLoadingStatus
 } from '../slices/city.slice';

import type { PayloadAction } from '@reduxjs/toolkit';

function* fetchCityByNameWorker(action: PayloadAction<string>) {
    console.log("ACT" +action.payload)
yield put(setSearchCitiesLoadingStatus(LOADING_STATUS.LOADING));
	try {
		const data: CitySearchResponse = yield call(openMeteoApi.searchCityByName, action.payload);
		yield put(setCitiesSearchResult(data));
		yield put(setSearchCitiesLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
		yield put(setSearchCitiesLoadingStatus(LOADING_STATUS.ERROR));
	} 
}

export function* cityWatcher() {
	yield takeLatest(fetchCityByName.type, fetchCityByNameWorker);
}