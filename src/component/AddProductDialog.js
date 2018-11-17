import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import classNames from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        flexBasis: 200,
    },
})

const AddProductDialog = (props) => {
    const {classes, dispatch, state, theme} = props
    const {isAddProductDialogOpen, name, price, place} = state.addProductDialogReducer
    const {position} = state.retrieveCurrentPositionReducer

    const handleTextFieldChange = (event, payload) => dispatch('RDX_PRODUCT_DIALOG_TEXTFIELD_CHANGE', payload)
    const handleToggleProductDialogCancel = event => dispatch('RDX_TOGGLE_PRODUCT_DIALOG_OPEN', {isAddProductDialogOpen: !isAddProductDialogOpen})
    const handleToggleProductDialogOk = event => dispatch('SGA_TOGGLE_PRODUCT_DIALOG_OPEN', {
        isAddProductDialogOpen: !isAddProductDialogOpen,
        name: name,
        price: price,
        place: place,
        position: position,
    })
    const handleToggleProductDialog = event => dispatch('RDX_TOGGLE_PRODUCT_DIALOG_OPEN', {isAddProductDialogOpen: !isAddProductDialogOpen})
    const okToSubmit = !!name && !!price && !!place

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
                <FormControl className={classNames(classes.margin, classes.textField)}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="產品"
                        type="text"
                        fullWidth
                        onChange={(event) => handleTextFieldChange(event, {name: event.target.value})}
                    />
                    <TextField
                        margin="dense"
                        id="place"
                        label="店舖"
                        type="text"
                        fullWidth
                        onChange={(event) => handleTextFieldChange(event, {place: event.target.value})}
                    />
                    <TextField
                        margin="dense"
                        id="price"
                        label="價錢"
                        type="number"
                        fullWidth
                        onChange={(event) => handleTextFieldChange(event, {price: event.target.value})}
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleToggleProductDialogCancel} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleToggleProductDialogOk} color="primary" disabled={!okToSubmit}>
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
