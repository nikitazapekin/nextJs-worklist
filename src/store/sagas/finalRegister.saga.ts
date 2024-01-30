import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { serverApi } from '../../api/server.api';
import {setFinalRegisterLoadingStatus, setFinalRegisterResult, fetchFinalRegisterFunction} from "../slices/finalRegister.slice"
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
    finalRegisterMessage: string
  }
function* fetchFinalRegister(action: PayloadAction<AuthProps>) {
    console.log("fetch authResponse" +action.payload)
 
yield put(setFinalRegisterLoadingStatus(LOADING_STATUS.LOADING));

	try {
        const finalRegisterMessage: AuthResponse = yield call(serverApi.finalRegisterAction, action.payload);
        console.log("FINAL REGISTER" +finalRegisterMessage)
		yield put(setFinalRegisterResult(finalRegisterMessage));
        yield put(setFinalRegisterLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
        console.log("FINAL REGISTER" )
        const  finalRegisterMessage= "Incorrect code"
        yield put(setFinalRegisterResult({finalRegisterMessage: "Incorrect code"}));
        yield put(setFinalRegisterLoadingStatus(LOADING_STATUS.ERROR));
    
	} 
}
export function* finalRegisterWatcher() {
    yield takeLatest(fetchFinalRegisterFunction.type, fetchFinalRegister);
}