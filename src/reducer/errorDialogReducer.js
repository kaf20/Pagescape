export default function errorDialogReducer(state = {
    isErrorDialogOpen: false,
    errorMessage: undefined,
}, action) {
    switch (action.type) {
        case 'RDX_TOGGLE_ERROR_DIALOG_OPEN':
            return Object.assign({}, state, {
                isErrorDialogOpen: action.payload.isErrorDialogOpen,
                errorMessage: action.payload.errorMessage,
            })
        default:
            return state
    }
}