export default function snackbarReducer(state = {
    isSnackBarDialogOpen: false,
    message: undefined,
}, action) {
    switch (action.type) {
        case 'RDX_TOGGLE_SNACKBAR_OPEN':
            const open = !!action.payload ? action.payload.isSnackBarDialogOpen : true
            const msg = !!action.payload && action.payload.message
            return Object.assign({}, state, {
                isSnackBarDialogOpen:  open,
                message:  msg,
            })
        default:
            return state
    }
}