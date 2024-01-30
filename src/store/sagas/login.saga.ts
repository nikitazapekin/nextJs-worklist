import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { serverApi } from '../../api/server.api';
// import {  setAuthLoadingStatus, setAuth, fetchAuthFunction, setAuthSearchResult} from '../slices/auth.slice';
import {setLoginResult, setLoginLoadingStatus, fetchLoginFunction} from "../slices/login.slice"
import type { PayloadAction } from '@reduxjs/toolkit';
interface LoginProps {
    email: string,
    password: string
}
interface LoginResponse {
    token: string
  }
function* fetchLogin(action: PayloadAction<LoginProps>) {
    console.log("ACT" +action.payload)
yield put(setLoginLoadingStatus(LOADING_STATUS.LOADING));
	try {
        const token: LoginResponse = yield call(serverApi.signInAction, action.payload);
		yield put(setLoginResult(token));
        yield put(setLoginLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
        console.log("SAAAAAAGA ERR"+error)
        yield put(setLoginLoadingStatus(LOADING_STATUS.ERROR));
	} 
}
export function*  loginWatcher() {
    yield takeLatest(fetchLoginFunction.type, fetchLogin);
}