import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { personalApi } from '../../api/personal.api';
import { setCreateOfferLoadingStatus, setCreateOfferResult, fetchCreateOfferFunction } from "../slices/createOffer.slice"

import type { PayloadAction } from '@reduxjs/toolkit';
interface AuthProps {
    title: string,
    describtion: string,
    skills: String[], 
    workingPerDay: string,
    location: string,
       salary: string
    token: string,
    formData: FormData,
arrayOfPictures: string
}
interface AuthResponse {
    username: string,
    country: string,
    city: string,
    telephone: string,
    email: string,
    RegistrationData: string,
    avatar: string,
    document: string,
    favouriteOffers: string,
    experience: string,
    lastTimeAtNetwork: string,
    education: string,
    describtion: string,
}
function* fetchCreateOffer(action: PayloadAction<AuthProps>) {
    console.log("PICTURESSSSSSSSSSSSSSSSSSSSSSSS" + JSON.stringify(action.payload))
    yield put(setCreateOfferLoadingStatus(LOADING_STATUS.LOADING));
    try {
        const finalRegisterMessage: AuthResponse = yield call(personalApi.CreateOfferAction, action.payload);
        console.log("PERSONAL" + JSON.stringify(finalRegisterMessage))
        yield put(setCreateOfferResult(finalRegisterMessage));
        yield put(setCreateOfferLoadingStatus(LOADING_STATUS.IDLE));
    } catch (error) {
        yield put(setCreateOfferLoadingStatus(LOADING_STATUS.ERROR));
    }
}
export function* createOfferWatcher() {
    yield takeLatest(fetchCreateOfferFunction.type, fetchCreateOffer);
}