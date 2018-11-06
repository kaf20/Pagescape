export default function counter(state = {
    open: false
}, action) {
    switch (action.type) {
        case 'RDX_INCREMENT':
            return state + 1
        case 'RDX_INCREMENT_IF_ODD':
            return (state % 2 !== 0) ? state + 1 : state
        case 'RDX_DECREMENT':
            return state - 1
        case 'RDX_DONE':
            return state - 200
        default:
            return state
    }
}