import {combineReducers} from 'redux'
import toggleDrawerOpenReducer from './toggleDrawerOpenReducer'
import retrieveProductReducer from './retrieveProductReducer'
import addProductDialogReducer from "./addProductDialogReducer";
import errorDialogReducer from "./errorDialogReducer";

export default combineReducers({
    retrieveProductReducer,
    toggleDrawerOpenReducer,
    addProductDialogReducer,
    errorDialogReducer,
})