import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { personalApi } from '../../api/personal.api';
import {setAvatarLoadingStatus, setAvatarResult, fetchAvatarFunction } from "../slices/setAvatar.slice"
//import {setPersonalInformationLoadingStatus, setPersonalInformationResult, fetchPersonalInformationFunction} from "../slices/person.slice"
import type { PayloadAction } from '@reduxjs/toolkit';
interface AuthProps {
 /*  token: string,
   avatar: string */
   formData: any
}
interface AuthResponse {
      avatar: string
  }
function* fetchSetAvatar(action: PayloadAction<AuthProps>) {
    console.log("fetch authResponse" +JSON.stringify(action.payload))
 
yield put(setAvatarLoadingStatus(LOADING_STATUS.LOADING));
	try {
        const finalRegisterMessage: AuthResponse = yield call(personalApi.setAvatar, action.payload);
        console.log("PERSONAL" +JSON.stringify(finalRegisterMessage))
	yield put(setAvatarResult(finalRegisterMessage));
        yield put(setAvatarLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
        yield put(setAvatarLoadingStatus(LOADING_STATUS.ERROR));
    
	} 
}
export function* setAvatarWatcher() {
    yield takeLatest(fetchAvatarFunction.type, fetchSetAvatar);
}