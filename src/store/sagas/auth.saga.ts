import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { CitySearchResponse } from '../../interfaces/city';
import { openMeteoApi } from '../../api';
import { serverApi } from '../../api/server.api';
 import { setCurrentAuth, setAuthLoadingStatus, setAuth, fetchAuthFunction} from '../slices/auth.slice';

import type { PayloadAction } from '@reduxjs/toolkit';
function* fetchAuth(action: PayloadAction<string>) {
    console.log("ACT" +action.payload)
//yield put(setSearchCitiesLoadingStatus(LOADING_STATUS.LOADING));
yield put(setAuthLoadingStatus(LOADING_STATUS.LOADING));

	try {
 const data: CitySearchResponse = yield call(serverApi.signUpAction, action.payload);
 console.log("data"+data)
	//	yield put(setCitiesSearchResult(data));
	//	yield put(setSearchCitiesLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
	//	yield put(setSearchCitiesLoadingStatus(LOADING_STATUS.ERROR));
	} 
}

export function*  authWatcher() {
	//yield takeLatest(fetchCityByName.type, fetchAuth);
    yield takeLatest(fetchAuthFunction.type, fetchAuth);
}