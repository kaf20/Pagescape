import {combineReducers} from 'redux'
import toggleDrawerOpenReducer from './toggleDrawerOpenReducer'
import retrieveProductReducer from './retrieveProductReducer'
import addProductDialogReducer from "./addProductDialogReducer";

export default combineReducers({
    retrieveProductReducer,
    toggleDrawerOpenReducer,
    addProductDialogReducer,
})