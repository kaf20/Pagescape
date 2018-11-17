export default function retrieveCurrentPositionReducer(state = {
    position: undefined,
}, action) {
    switch (action.type) {
        case 'RDX_RETRIEVE_CURRENT_POSITION':
            return Object.assign({}, state, {
                position: action.payload.position,
            })
        default:
            return state
    }
}