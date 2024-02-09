import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { serverApi } from '../../api/server.api';
import { setPersonalData } from '../slices/auth.slice';
import {setGetUsernameLoadingStatus, setGetUsernameResult, fetchGetUsernameFunction}  from "../slices/getUsername.slice"
import type { PayloadAction } from '@reduxjs/toolkit';
interface getUsernameProps {
    token: string
}
interface getUsernameResponse {
    data: {

        username: string,
        email: null | string
    }
  }
function* fetchUser(action: PayloadAction<getUsernameProps>) {

console.log("FUNCTIIIIIIIIIIIIIIIIIIIIIIIIION")
	try {
        const code: getUsernameResponse  = yield call(serverApi.getUsernameAction, action.payload);
        console.log("COD"+JSON.stringify(code))
        console.log("DAT" +code.data)
const username = code.data.username
console.log("USER" +username)
console.log("WORKKKKKKKKKKKKKKKK")
	    yield put(setGetUsernameResult({username}));

	} catch (error) {
        console.log("ERRRRRRRRRRROR")
        yield put(setGetUsernameResult(error.response.data.error));
     //   yield put(setGetUsernameLoadingStatus(LOADING_STATUS.ERROR));
	} 
}
export function*  GetUsernameWatcher() {
    yield takeLatest(fetchGetUsernameFunction.type, fetchUser);
}