import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { personalApi } from '../../api/personal.api';
//import {setPersonalInformationLoadingStatus, setPersonalInformationResult, fetchPersonalInformationFunction} from "../slices/person.slice"
import { setYourInformationLoadingStatus, setYourInformationResult, setYourInformationErrorMessage, fetchYourInformationFunction} from "../slices/yourInformation.slice"
import type { PayloadAction } from '@reduxjs/toolkit';
interface PersonalInformationTypes {
    education: string,
    about: string;
    experience: string;
    email: string;
    password: string;
    telephone: string;
    country: string;
    city: string;
    document: string;
    token: string;
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
        token: string,
        errorMessage: null | string
  }
function* fetchYourInformation(action: PayloadAction<PersonalInformationTypes>) {
    console.log("fetch authResponse" +JSON.stringify(action.payload))
 
yield put(setYourInformationLoadingStatus(LOADING_STATUS.LOADING));
	try {
        const finalRegisterMessage: AuthResponse = yield call(personalApi.EditPersonalInformation, action.payload);
        console.log("PERSONAL" +JSON.stringify(finalRegisterMessage))
	yield put(setYourInformationResult(finalRegisterMessage));
        yield put(setYourInformationLoadingStatus(LOADING_STATUS.IDLE));
	} catch (error) {
                console.log("ERROR SAGA" +JSON.stringify(error.response.data.errorMessage))
                yield put(setYourInformationErrorMessage(error.response.data.errorMessage));
      //  yield put(setYourInformationLoadingStatus(LOADING_STATUS.ERROR));
	} 
}
export function* yourInformationWatcher() {
    yield takeLatest(fetchYourInformationFunction.type, fetchYourInformation);
}