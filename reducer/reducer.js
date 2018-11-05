export default function counter(state = 0, action) {
    switch (action.type) {
        case 'RDR_INCREMENT':
            return state + 1
        case 'RDR_INCREMENT_IF_ODD':
            return (state % 2 !== 0) ? state + 1 : state
        case 'RDR_DECREMENT':
            return state - 1
        case 'RDR_DONE':
            return state - 200
        default:
            return state
    }
}