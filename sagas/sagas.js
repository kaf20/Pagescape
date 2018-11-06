import {delay} from 'redux-saga'
import {all, put, takeEvery} from 'redux-saga/effects'

import {done} from './done'

function* incrementAsync() {
    yield delay(1000)
    yield put({type: 'RDX_INCREMENT'})
}

function* watchIncrementAsync() {
    yield takeEvery('SGA_INCREMENT_ASYNC', incrementAsync)
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* rootSaga() {
    yield all([
        done(),
        incrementAsync(),
        watchIncrementAsync()
    ])
}