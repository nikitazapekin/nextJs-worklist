import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { serverApi } from '../../api/server.api';
import { setPersonalData } from '../slices/auth.slice';
import {setEmailCodeLoadingStatus, setEmailCodeResult, fetchEmailCodeFunction}  from "../slices/emailCode.slice"
import type { PayloadAction } from '@reduxjs/toolkit';
interface emailCodeProps {
    username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    password: string,
    //code: string
}
interface emailCodeResponse {
    code: string
  }
function* fetchEmailCode(action: PayloadAction<emailCodeProps>) {
        const username= action.payload.username
        const country = action.payload.country
        const city = action.payload.city
        const email = action.payload.email
        const password = action.payload.password
        const telephone = action.payload.telephone
yield put(setEmailCodeLoadingStatus(LOADING_STATUS.LOADING));
yield put(setPersonalData({username, country, city, email, password, telephone}  ))
	try {
        const code: emailCodeResponse = yield call(serverApi.getEmailCodeAction, action.payload);
        console.log("COD"+JSON.stringify(code))

	yield put(setEmailCodeResult(code));
        yield put(setEmailCodeLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
        yield put(setEmailCodeResult(error.response.data.error));
        yield put(setEmailCodeLoadingStatus(LOADING_STATUS.ERROR));
	} 
}
export function*  EmailCodeWatcher() {
    yield takeLatest(fetchEmailCodeFunction.type, fetchEmailCode);
}