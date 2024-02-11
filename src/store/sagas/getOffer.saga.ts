import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { offersApi } from '../../api/offers.api';
import { setGetOfferLoadingStatus, setGetOfferResult, fetchGetOfferFunction } from "../slices/getOffer.slice"
import type { PayloadAction } from '@reduxjs/toolkit';
interface AuthProps {
   id: string
}
/*
interface AuthResponse {
    data: Array<
{
    id: number, 
    title: string,
    describtion: string,
    location: string,
    salary: string,
    skills: String[],
    workingPerDay: string,
}
    >
} */
/*

    "id": 1,
    "title": "bgf",
    "description": "fbbf",
    "skills": [
        "{bdbfd}"
    ],
    "workingPerDay": "0-8 hours",
    "location": "dffb",
    "salary": "1000-2000",
    "owner": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTU1ODcxNzcsImlhdCI6MTcwNzU4Njk5NywiaXNzIjoiZ29sYW5nLW12Yy1yZXN0LWFwaSIsInVzZXJuYW1lIjoiZHNkcyJ9.GmI2ZT8lSLPew_c1WlDU3nfWkzNBa7VbH0_VFlqMTgk",
    "image_set": [
        "{galka.png",
        "heart.png",
        "icon-354281_1280.webp}"
    ],
    "data_of_publication": "10,02,2024",
    "last_time_of_rise": "10,02,2024"
    */

    interface AuthResponse  {
        data: {

            id: number,
            title: string,
        description: string,
        skills: string[],
        workingPerDay: string,
        location: string,
        salary: string,
        owner: string,
        image_set: String[],
        data_of_publication:  string,
        last_time_of_rise: string
    }
}


function* fetchGetOffer(action: PayloadAction<AuthProps>) {
    console.log("fetch authResponseeee" + JSON.stringify(action.payload))
    yield put(setGetOfferLoadingStatus(LOADING_STATUS.LOADING));
    try {
        const finalRegisterMessage: AuthResponse = yield call(offersApi.getOfferAction,  action.payload);
        console.log("SAGGGGGGGGGGGGGGGGGGGGGAAAAAAAAAAAAAAA" +JSON.stringify(finalRegisterMessage))
      //  console.log(finalRegisterMessage.workingPerDay)
      yield put(setGetOfferResult(finalRegisterMessage));
        yield put(setGetOfferLoadingStatus(LOADING_STATUS.IDLE));
    } catch (error) {
        yield put(setGetOfferLoadingStatus(LOADING_STATUS.ERROR));
    }
}
export function* GetOfferWatcher() {
    yield takeLatest(fetchGetOfferFunction.type, fetchGetOffer);
}