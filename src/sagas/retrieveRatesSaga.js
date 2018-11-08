import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

function* doRetrieveRates(payload) {
    try {
        const api = () =>
            axios.get('/data.json', {
                headers: {
                    'Accept': 'application/json'
                }
            })
        const result = yield call(api)
        yield put({type: 'RDX_RETRIEVE_RATES_SUCCESS', payload: result.data})
    } catch (error) {
        yield put({type: 'RDX_RETRIEVE_RATES_FAIL'})
    }
}

export function* retrieveRatesSaga() {
    yield takeLatest('SGA_RETRIEVE_RATES', doRetrieveRates)
}