import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { offersApi } from '../../api/offers.api';
 
import {setGetAmountOfOffersLoadingStatus, setGetAmountOfOffersResult, fetchGetAmountOfOffersFunction} from "../slices/getAmountOfOffers.slice"
import type { PayloadAction } from '@reduxjs/toolkit';
interface AuthProps {
    limit: number;
    page: number
}
interface AmountOfUsersTypes {
   data: {
        amountOfOffers: string,
        error: null | string
 }
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

function* fetchGetAmountOfOffers(action: PayloadAction<AuthProps>) {
    console.log("fetch authResponseeee" + JSON.stringify(action.payload))
    yield put(setGetAmountOfOffersLoadingStatus(LOADING_STATUS.LOADING));
    try {
        const finalRegisterMessage: AmountOfUsersTypes = yield call(offersApi.getAmountOfOffersAction);
        console.log("ANSWER" +JSON.stringify(finalRegisterMessage))
        console.log("AMOUNT"+finalRegisterMessage.data.amountOfOffers)

      yield put(setGetAmountOfOffersResult(finalRegisterMessage));
      //  yield put(setGetAmountOfOffersLoadingStatus(LOADING_STATUS.IDLE));
    } catch (error) {
        yield put(setGetAmountOfOffersLoadingStatus(LOADING_STATUS.ERROR));
    }
}
export function* GetAmountOfOfferWatcher() {
    yield takeLatest(fetchGetAmountOfOffersFunction.type, fetchGetAmountOfOffers);
}