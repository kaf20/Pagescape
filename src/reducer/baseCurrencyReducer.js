export default function baseCurrencyReducer(state = {
    baseCurrency: 'HKD',
    alternateCurrency: 'USD',
    baseCurrencyList: [
        'HKD'
    ],
    alternateCurrencyList: [
        'USD',
        'CNY',
        'JPY',
    ]
}, action) {
    switch (action.type) {
        case 'RDX_CHANGE_BASE_CURRENCY':
            return Object.assign({}, state, {baseCurrency: action.payload})
        case 'RDX_CHANGE_ALTERNATE_CURRENCY':
            return Object.assign({}, state, {alternateCurrency: action.payload})
        default:
            return state
    }
}