import { all } from 'redux-saga/effects';
import { authWatcher } from './auth.saga';
import { loginWatcher } from './login.saga';
import { EmailCodeWatcher } from './emailCode.saga';
import {finalRegisterWatcher} from "./finalRegister.saga"
import { personalInformationWatcher } from './personalData.saga';
export function* rootSaga() {
	yield all([
         authWatcher(), 
         loginWatcher(),
         EmailCodeWatcher(),
         finalRegisterWatcher(),
          personalInformationWatcher()
    ]);
}