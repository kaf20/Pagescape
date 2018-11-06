import {put, takeEvery} from 'redux-saga/effects'

function* doItNow() {
    yield put({type: 'RDX_DONE'})
}

export function* done() {
    yield takeEvery('SGA_DONE', doItNow)
}