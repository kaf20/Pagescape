export default function addProductDialogReducer(state = {
    isAddProductDialogOpen: false,
}, action) {
    switch (action.type) {
        case 'RDX_TOGGLE_PRODUCT_DIALOG_OPEN':
            return Object.assign({}, state, {
                isAddProductDialogOpen: action.payload.isAddProductDialogOpen,
            })
        default:
            return state
    }
}