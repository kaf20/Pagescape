export default function baseCurrencyReducer(state = {
    baseCurrency: 'HKD',
    alternateCurrency: undefined,
    baseCurrencyList: [
        'HKD'
    ],
    alternateCurrencyList: []
}, action) {
    switch (action.type) {
        case 'RDX_CHANGE_BASE_CURRENCY':
            return Object.assign({}, state, {baseCurrency: action.payload})
        case 'RDX_CHANGE_ALTERNATE_CURRENCY':
            return Object.assign({}, state, {alternateCurrency: action.payload})
        case 'RDX_RETRIEVE_ALTERNATE_CURRENCY_LIST_SUCCESS':
            const s = {
                alternateCurrency: Array.isArray(action.payload) && action.payload.length > 0 && action.payload[0],
                alternateCurrencyList: action.payload
            }
            return Object.assign({}, state, s)
        case 'RDX_RETRIEVE_ALTERNATE_CURRENCY_LIST_FAIL':
        default:
            return state
    }
}