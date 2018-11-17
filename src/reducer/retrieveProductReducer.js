export default function retrieveProductReducer(state = {
    products: [],
    hasMore: false,
    page: 0,
    size: 6,
}, action) {
    switch (action.type) {
        case 'RDX_RETRIEVE_PRODUCT_NEXT_PAGE':
            return Object.assign({}, state, {
                page: action.payload.page
            })
        case 'RDX_RETRIEVE_PRODUCT_SUCCESS':
            return Object.assign({}, state, {
                products: state.products.concat(action.payload.products)
            })
        case 'RDX_RETRIEVE_PRODUCT_LOAD_MORE':
            return Object.assign({}, state, {
                hasMore: action.payload.hasMore
            })
        case 'RDX_RETRIEVE_PRODUCT_FAIL':
        default:
            return state
    }
}