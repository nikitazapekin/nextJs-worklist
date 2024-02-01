import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { personalApi } from '../../api/personal.api';
import {setPersonalInformationLoadingStatus, setPersonalInformationResult, fetchPersonalInformationFunction} from "../slices/person.slice"
import type { PayloadAction } from '@reduxjs/toolkit';
interface AuthProps {
   token: string,
}
interface AuthResponse {
        username: string ,
        country: string , 
        city: string ,
        telephone: string ,
        email:  string,
        RegistrationData: string ,
        avatar: string ,
        document: string ,
        favouriteOffers:  string ,
        experience: string ,
        lastTimeAtNetwork: string ,
        education: string ,
        describtion:  string,
  }
function* fetchPersonalInformation(action: PayloadAction<AuthProps>) {
    console.log("fetch authResponse" +JSON.stringify(action.payload))
 
yield put(setPersonalInformationLoadingStatus(LOADING_STATUS.LOADING));
	try {
        const finalRegisterMessage: AuthResponse = yield call(personalApi.PersonalInformationAction, action.payload);
        console.log("PERSONAL" +JSON.stringify(finalRegisterMessage))
	yield put(setPersonalInformationResult(finalRegisterMessage));
        yield put(setPersonalInformationLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
        yield put(setPersonalInformationLoadingStatus(LOADING_STATUS.ERROR));
    
	} 
}
export function* personalInformationWatcher() {
    yield takeLatest(fetchPersonalInformationFunction.type, fetchPersonalInformation);
}