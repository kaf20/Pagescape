export default function counter(state = {
    open: false,
    rates: [],
    shit: undefined
}, action) {
    switch (action.type) {
        case 'RDX_RETRIEVE_RATES_SUCCESS':
            return Object.assign({}, state, {rates: action.payload})
        default:
            return state
    }
}