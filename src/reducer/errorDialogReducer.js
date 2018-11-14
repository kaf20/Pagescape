export default function errorDialogReducer(state = {
    isErrorDialogOpen: false,
    errorMessage: undefined,
}, action) {
    switch (action.type) {
        case 'RDX_TOGGLE_ERROR_DIALOG_OPEN':
            let open = true
            if (!!action.payload)
                open = action.payload.isErrorDialogOpen
            let msg = '出事'
            if ((!!action.payload && !!action.payload.errorMessage))
                msg = action.payload.errorMessage
            return Object.assign({}, state, {
                isErrorDialogOpen:  open,
                errorMessage:  msg,
            })
        default:
            return state
    }
}