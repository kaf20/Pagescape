import {call, put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

function* doRetrieve(action) {
    try {
        const api = () =>
            axios.post('/product', {
                name: action.payload.name,
                price: action.payload.price,
                place: action.payload.place,
                description: action.payload.description,
                imageUrl: action.payload.imageUrl,
            })
        const result = yield call(api)
        yield put({type: 'RDX_TOGGLE_PRODUCT_DIALOG_OPEN', payload: {
            isAddProductDialogOpen: action.payload.isAddProductDialogOpen
        }})
        yield put({type: 'SGA_RETRIEVE_PRODUCT'})
        yield put({type: 'RDX_TOGGLE_SNACKBAR_OPEN', payload: {
                isSnackBarDialogOpen: !action.payload.isSnackBarDialogOpen,
                message: '上架了👍大成功😘'
            }})
    } catch (error) {
        yield put({type: 'RDX_TOGGLE_PRODUCT_DIALOG_OPEN', payload: {
                    isAddProductDialogOpen: action.payload.isAddProductDialogOpen
                }}) // close product dialog
        yield put({type: 'RDX_TOGGLE_ERROR_DIALOG_OPEN'})   // open error dialog
    }
}

export function* addProductDialogSaga() {
    yield takeLatest('SGA_TOGGLE_PRODUCT_DIALOG_OPEN', doRetrieve)
}