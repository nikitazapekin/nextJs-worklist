import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { CitySearchResponse } from '../../interfaces/city';
import { openMeteoApi } from '../../api';
import { serverApi } from '../../api/server.api';
import {setEmailCodeLoadingStatus, setEmailCodeResult, fetchEmailCodeFunction}  from "../slices/emailCode.slice"
import type { PayloadAction } from '@reduxjs/toolkit';
interface emailCodeProps {
    username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    password: string
}
interface emailCodeResponse {
    code: string
  }
function* fetchEmailCode(action: PayloadAction<emailCodeProps>) {
yield put(setEmailCodeLoadingStatus(LOADING_STATUS.LOADING));
	try {
        const code: emailCodeResponse = yield call(serverApi.getEmailCodeAction, action.payload);
        console.log("COD"+JSON.stringify(code))
	yield put(setEmailCodeResult(code));
        yield put(setEmailCodeLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
        console.log("SAAAAAAGA ERR"+JSON.stringify(error.response.data.error))
        yield put(setEmailCodeResult(error.response.data.error));
        yield put(setEmailCodeLoadingStatus(LOADING_STATUS.ERROR));
	} 
}
export function*  EmailCodeWatcher() {
    yield takeLatest(fetchEmailCodeFunction.type, fetchEmailCode);
}