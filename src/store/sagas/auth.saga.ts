import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { CitySearchResponse } from '../../interfaces/city';
import { openMeteoApi } from '../../api';
import { serverApi } from '../../api/server.api';
 import { setCurrentAuth, setAuthLoadingStatus, setAuth, fetchAuthFunction, setAuthSearchResult, setPersonalData} from '../slices/auth.slice';
import type { PayloadAction } from '@reduxjs/toolkit';
interface AuthProps {
    username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    password: string,
    code: string
}
interface AuthResponse {
    authResponse: string
  }
function* fetchAuth(action: PayloadAction<AuthProps>) {
    console.log("ACT" +action.payload)
  /*  const username= action.payload.username
    const country = action.payload.country
    const city = action.payload.city
    const email = action.payload.email
    const password = action.payload.password
    const telephone = action.payload.telephone */
yield put(setAuthLoadingStatus(LOADING_STATUS.LOADING));

	try {
        const authResponse: AuthResponse = yield call(serverApi.signUpAction, action.payload);
        
		yield put(setAuthSearchResult(authResponse));
      //  yield put(setPersonalData({username, country, city, email, password, telephone}  ))
        yield put(setAuthLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
        yield put(setAuthLoadingStatus(LOADING_STATUS.ERROR));
    
	} 
}
export function*  authWatcher() {
    yield takeLatest(fetchAuthFunction.type, fetchAuth);
}