import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

function* doRetrieve(action) {
    try {
        const payload = action.payload || {}
        const api = () =>
            axios.get('/product', {
                params: {
                    page: payload.page || 0,
                    size: payload.size || 6,
                }
            })
        const result = yield call(api)
        yield put({type: 'RDX_RETRIEVE_PRODUCT_SUCCESS', payload: {
            products: result.data.content
        }})
        yield put({type: 'RDX_RETRIEVE_PRODUCT_LOAD_MORE', payload: {
            hasMore: !result.data.last
        }})
        yield put({type: 'RDX_RETRIEVE_PRODUCT_NEXT_PAGE', payload: {
            page: payload.page + 1
        }})
    } catch (error) {
        yield put({type: 'RDX_RETRIEVE_PRODUCT_FAIL'})
    }
}

export function* retrieveProductSaga() {
    yield takeLatest('SGA_RETRIEVE_PRODUCT', doRetrieve)
}