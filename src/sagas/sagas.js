import {all} from 'redux-saga/effects'
import {retrieveProductSaga} from "./retrieveProductSaga";

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* rootSaga() {
    yield all([
        retrieveProductSaga(),
    ])
}