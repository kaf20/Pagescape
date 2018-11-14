import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

function* doRetrieve(action) {
    try {
        const api = () =>
            axios.post('/product', {
                name: 'abc',
                price: 9.8,
                place: 'place',
                description: 'description',
                imageUrl: 'imageUrl',
            })
        const result = yield call(api)
        yield put({type: 'RDX_TOGGLE_PRODUCT_DIALOG_OPEN', payload: {
            isAddProductDialogOpen: action.payload.isAddProductDialogOpen
        }})
    } catch (error) {
        yield put({type: 'RDX_TOGGLE_ERROR_DIALOG_OPEN'})   // open error dialog
        yield put({type: 'RDX_TOGGLE_PRODUCT_DIALOG_OPEN', payload: {
                    isAddProductDialogOpen: action.payload.isAddProductDialogOpen
                }}) // close product dialog
    }
}

export function* addProductDialogSaga() {
    yield takeLatest('SGA_TOGGLE_PRODUCT_DIALOG_OPEN', doRetrieve)
}