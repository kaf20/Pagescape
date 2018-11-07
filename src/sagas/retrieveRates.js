import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

function* doRetrieveRates() {
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

export function* retrieveRates() {
    yield takeEvery('SGA_RETRIEVE_RATES', doRetrieveRates)
}