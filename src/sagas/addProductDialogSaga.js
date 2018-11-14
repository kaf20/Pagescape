import {put, takeLatest} from 'redux-saga/effects'

function* doRetrieve(action) {
    yield put({type: 'RDX_TOGGLE_PRODUCT_DIALOG_OPEN', payload: action.payload.isAddProductDialogOpen})
}

export function* addProductDialogSaga() {
    yield takeLatest('SGA_TOGGLE_PRODUCT_DIALOG_OPEN', doRetrieve)
}