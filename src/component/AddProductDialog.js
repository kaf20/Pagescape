import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';

const styles = theme => ({

})

const AddProductDialog = (props) => {
    const {classes, dispatch, state, theme} = props
    const {isAddProductDialogOpen} = state.addProductDialogReducer

    const handleToggleProductDialogCancel = event => dispatch('RDX_TOGGLE_PRODUCT_DIALOG_OPEN', {isAddProductDialogOpen: !isAddProductDialogOpen})
    const handleToggleProductDialogOk = event => dispatch('SGA_TOGGLE_PRODUCT_DIALOG_OPEN', {isAddProductDialogOpen: !isAddProductDialogOpen})
    const handleToggleProductDialog = event => dispatch('RDX_TOGGLE_PRODUCT_DIALOG_OPEN', {isAddProductDialogOpen: !isAddProductDialogOpen})

    return (
        <Dialog aria-labelledby='simple-dialog-title'
                disableBackdropClick
                maxWidth="xs"
                onClose={handleToggleProductDialog}
                open={isAddProductDialogOpen}>
            <DialogTitle id='simple-dialog-title'>開心 ❤ Share</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    開心 ❤ Share
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="產品"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="place"
                    label="店舖"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="price"
                    label="價錢"
                    type="number"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleToggleProductDialogCancel} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleToggleProductDialogOk} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}

AddProductDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(AddProductDialog)
