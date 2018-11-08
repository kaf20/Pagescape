import {all} from 'redux-saga/effects'

import {retrieveRatesSaga} from './retrieveRatesSaga'
import {retrieveAlternateCurrencyListSaga} from "./retrieveAlternateCurrencyListSaga";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* rootSaga() {
    yield all([
        retrieveRatesSaga(),
        retrieveAlternateCurrencyListSaga(),
    ])
}