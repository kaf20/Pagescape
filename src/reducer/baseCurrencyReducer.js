export default function baseCurrencyReducer(state = {
    baseCurrency: 'hkd',
    baseCurrencyList: [
        'HKD',
        'USD',
        'CNY',
        'JPY'
    ]
}, action) {
    switch (action.type) {
        case 'RDX_CHANGE_BASE_CURRENCY':
            return Object.assign({}, state, {baseCurrency: action.payload})
        default:
            return state
    }
}