import {all} from 'redux-saga/effects'

import {retrieveRatesSaga} from './retrieveRatesSaga'

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* rootSaga() {
    yield all([
        retrieveRatesSaga(),
    ])
}