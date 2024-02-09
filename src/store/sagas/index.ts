import { all } from 'redux-saga/effects';
import { authWatcher } from './auth.saga';
import { loginWatcher } from './login.saga';
import { EmailCodeWatcher } from './emailCode.saga';
import {finalRegisterWatcher} from "./finalRegister.saga"
import { personalInformationWatcher } from './personalData.saga';
import { yourInformationWatcher } from './yourInformation.saga';
import { setAvatarWatcher } from './setAvatar.saga';
import { createOfferWatcher } from './createOffer.saga';
import { GetOfferWatcher } from './getOffers.saga';
import { GetUsernameWatcher } from './getUsername.saga';
export function* rootSaga() {
	yield all([
         authWatcher(), 
         loginWatcher(),
         EmailCodeWatcher(),
         finalRegisterWatcher(),
          personalInformationWatcher(),
          yourInformationWatcher(),
          setAvatarWatcher(),
          createOfferWatcher(),
          GetOfferWatcher(), 
          GetUsernameWatcher()
    ]);
}