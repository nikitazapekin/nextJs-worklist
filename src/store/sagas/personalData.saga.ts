import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { personalApi } from '../../api/personal.api';
//import {setFinalRegisterLoadingStatus, setFinalRegisterResult, fetchFinalRegisterFunction} from "../slices/finalRegister.slice"
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
   /* username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    password: string,
    role: string,
    registration_data: string,
    avatar: string,
    document: any,
    favourite_offers: Object[],
    experience: string,
    education: string,
    last_time_at_network: string,
    chats: any,
    user_id: string,
    describtion: string, */
  //  finalRegisterMessage: string
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
        console.log("FINAL REGISTER" )
        const  finalRegisterMessage= "Incorrect code"
       // yield put(setPersonalInformationResult({finalRegisterMessage: "Incorrect code"}));
        yield put(setPersonalInformationLoadingStatus(LOADING_STATUS.ERROR));
    
	} 
}
export function* personalInformationWatcher() {
    yield takeLatest(fetchPersonalInformationFunction.type, fetchPersonalInformation);
}