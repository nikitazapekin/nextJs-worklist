import { call, put, takeLatest } from 'redux-saga/effects';
import { LOADING_STATUS } from '../../constants/loadingStatus';
import { offersApi } from '../../api/offers.api';
import { setGetOffersLoadingStatus, setGetOffersResult, fetchGetOffersFunction } from "../slices/getOffers.slice"

import type { PayloadAction } from '@reduxjs/toolkit';
interface AuthProps {
    limit: number;
    page: number
}
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
}
function* fetchGetOffers(action: PayloadAction<AuthProps>) {
    console.log("fetch authResponseeee" + JSON.stringify(action.payload))
    yield put(setGetOffersLoadingStatus(LOADING_STATUS.LOADING));
    try {
        const finalRegisterMessage: AuthResponse = yield call(offersApi.getOffersAction,  action.payload);
       yield put(setGetOffersResult(finalRegisterMessage));
        yield put(setGetOffersLoadingStatus(LOADING_STATUS.IDLE));
    } catch (error) {
        yield put(setGetOffersLoadingStatus(LOADING_STATUS.ERROR));
    }
}
export function* GetOfferWatcher() {
    yield takeLatest(fetchGetOffersFunction.type, fetchGetOffers);
}