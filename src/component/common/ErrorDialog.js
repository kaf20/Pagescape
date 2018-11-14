import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';

const styles = theme => ({

})

const ErrorDialog = (props) => {
    const {classes, dispatch, state, theme} = props
    const {isErrorDialogOpen, errorMessage} = state.errorDialogReducer

    const handleToggleErrorDialog = event => dispatch('RDX_TOGGLE_ERROR_DIALOG_OPEN', {isErrorDialogOpen: !isErrorDialogOpen})

    return (
        <Dialog aria-labelledby='simple-dialog-title'
                disableBackdropClick
                maxWidth="xs"
                onClose={handleToggleErrorDialog}
                open={isErrorDialogOpen}>
            <DialogTitle id='simple-dialog-title'>{errorMessage}</DialogTitle>
            <DialogContent>
                <DialogContentText>{errorMessage}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleToggleErrorDialog} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}

ErrorDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(ErrorDialog)
