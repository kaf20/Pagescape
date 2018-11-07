import {combineReducers} from 'redux'
import retrieveRatesReducer from './retrieveRatesReducer'
import toggleDrawerOpenReducer from './toggleDrawerOpenReducer'
import baseCurrencyReducer from './baseCurrencyReducer'

export default combineReducers({
    retrieveRatesReducer,
    toggleDrawerOpenReducer,
    baseCurrencyReducer
})