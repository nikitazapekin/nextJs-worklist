import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { getPersistConfig } from 'redux-deep-persist';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import authSlice from './slices/auth.slice';
import loginSlice from './slices/login.slice';
import emailCodeSlice from './slices/emailCode.slice';
import finalRegisterSlice from './slices/finalRegister.slice';
import personalInformationSlice from './slices/person.slice';
import yourInformationSlice from './slices/yourInformation.slice';
import setAvatarSlice from './slices/setAvatar.slice';
import getOffersSlice from './slices/getOffers.slice';
import getUsernameSlice from './slices/getUsername.slice';
import getAmountOfOffersSlice from './slices/getAmountOfOffers.slice';
//import { addToLocalStorageClickedOfferSlice } from './slices/addToLocalStorageClikedOffer';
const rootReducer = combineReducers({
    authSlice: authSlice,
	loginSlice: loginSlice,
	emailCodeSlice: emailCodeSlice,
	finalRegisterSlice: finalRegisterSlice,
	personalInformationSlice: personalInformationSlice,
	yourInformation: yourInformationSlice,
	setAvatarSlice: setAvatarSlice, 
	getOffersSlice: getOffersSlice,
	getUsernameSlice: getUsernameSlice,
	getAmountOfOffers: getAmountOfOffersSlice
	//addToLocalStorageSlice: addToLocalStorageClickedOfferSlice
});
const persistConfig = getPersistConfig({
	key: 'root',
	storage,
	blacklist: ['loginSlice', 'emailCodeSlice', 'finalRegisterSlice', 'getOffersSlice'],
	rootReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
			sagaMiddleware,
		}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;