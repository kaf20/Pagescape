import {combineReducers} from 'redux'
import retrieveRatesReducer from './retrieveRatesReducer'
import toggleDrawerOpenReducer from './toggleDrawerOpenReducer'

export default combineReducers({
    retrieveRatesReducer,
    toggleDrawerOpenReducer,
})