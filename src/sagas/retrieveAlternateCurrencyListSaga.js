import {put, takeLatest} from 'redux-saga/effects'

function* doRetrieve(action) {
    try {
        yield put({type: 'RDX_RETRIEVE_ALTERNATE_CURRENCY_LIST_SUCCESS', payload: ['USD', 'CNY', 'JPY', 'GBP']})
    } catch (error) {
        yield put({type: 'RDX_RETRIEVE_ALTERNATE_CURRENCY_LIST_FAIL'})
    }
}

export function* retrieveAlternateCurrencyListSaga() {
    yield takeLatest('SGA_RETRIEVE_ALTERNATE_CURRENCY_LIST', doRetrieve)
}