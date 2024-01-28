import { all } from 'redux-saga/effects';
/*
import { todayWeatherWatcher } from './todayweather.saga';
import { hourlyWeatherWatcher } from './hourlyweather.saga';
import { dailyWeatherWatcher } from './dailyweather.saga';
*/
import { cityWatcher } from './city.saga';
import { authWatcher } from './auth.saga';
import { loginWatcher } from './login.saga';
import { EmailCodeWatcher } from './emailCode.saga';
export function* rootSaga() {
	yield all([
      //  todayWeatherWatcher(), hourlyWeatherWatcher(), dailyWeatherWatcher(),
         cityWatcher(),
         authWatcher(), 
         loginWatcher(),
         EmailCodeWatcher()
    ]);
}