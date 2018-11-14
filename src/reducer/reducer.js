import {combineReducers} from 'redux'
import toggleDrawerOpenReducer from './toggleDrawerOpenReducer'
import retrieveProductReducer from './retrieveProductReducer'

export default combineReducers({
    retrieveProductReducer,
    toggleDrawerOpenReducer,
})