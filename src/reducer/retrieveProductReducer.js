export default function retrieveProductReducer(state = {
    products: [],
}, action) {
    switch (action.type) {
        case 'RDX_RETRIEVE_PRODUCT_SUCCESS':
            return Object.assign({}, state, {
                products: action.payload
            })
        case 'RDX_RETRIEVE_PRODUCT_FAIL':
        default:
            return state
    }
}