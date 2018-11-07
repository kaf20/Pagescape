export default function retrieveRatesReducer(state = {
    rates: []
}, action) {
    switch (action.type) {
        case 'RDX_RETRIEVE_RATES_SUCCESS':
            return Object.assign({}, state, {rates: action.payload})
        default:
            return state
    }
}