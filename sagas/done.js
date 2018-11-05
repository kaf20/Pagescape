import {put, takeEvery} from 'redux-saga/effects'

function* doItNow() {
    yield put({type: 'RDR_DONE'})
}

export function* done() {
    yield takeEvery('SGA_DONE', doItNow)
}