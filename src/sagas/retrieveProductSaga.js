import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

function* doRetrieve(action) {
    try {
        const api = () =>
            axios.get('/api/v1/product', {
                headers: {
                    'Accept': 'application/json'
                },
            })
        const result = yield call(api)
        yield put({type: 'RDX_RETRIEVE_PRODUCT_SUCCESS', payload: result.data})
    } catch (error) {
        yield put({type: 'RDX_RETRIEVE_PRODUCT_FAIL'})
    }
}

export function* retrieveProductSaga() {
    yield takeLatest('SGA_RETRIEVE_PRODUCT', doRetrieve)
}