import {combineReducers} from 'redux'
import toggleDrawerOpenReducer from './toggleDrawerOpenReducer'
import retrieveProductReducer from './retrieveProductReducer'
import addProductDialogReducer from "./addProductDialogReducer";
import errorDialogReducer from "./errorDialogReducer";
import snackbarReducer from "./snackbarReducer";
import retrieveCurrentPositionReducer from "./retrieveCurrentPositionReducer";

export default combineReducers({
    retrieveProductReducer,
    toggleDrawerOpenReducer,
    addProductDialogReducer,
    errorDialogReducer,
    snackbarReducer,
    retrieveCurrentPositionReducer,
})