export default function addProductDialogReducer(state = {
    isAddProductDialogOpen: false,
    name: undefined,
    place: undefined,
    price: undefined,
    description: undefined,
    imageUrl: undefined,
}, action) {
    switch (action.type) {
        case 'RDX_PRODUCT_DIALOG_TEXTFIELD_CHANGE':
            return Object.assign({}, state, action.payload)
        case 'RDX_TOGGLE_PRODUCT_DIALOG_OPEN':
            return Object.assign({}, state, {
                isAddProductDialogOpen: action.payload.isAddProductDialogOpen,
            })
        default:
            return state
    }
}