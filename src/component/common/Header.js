import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import classNames from 'classnames'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';

const drawerWidth = 240

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
})

const Header = (props) => {
    const {classes, dispatch, state, theme} = props
    const {drawerOpen} = state.toggleDrawerOpenReducer
    const {isAddProductDialogOpen} = state.addProductDialogReducer

    const handleToggleDrawerOpen = event => dispatch('RDX_TOGGLE_DRAWER_OPEN', event.target.value)
    const handleToggleProductDialog = event => dispatch('RDX_TOGGLE_PRODUCT_DIALOG_OPEN', {isAddProductDialogOpen: !isAddProductDialogOpen})
    const handleToggleProductDialogCancel = event => dispatch('RDX_TOGGLE_PRODUCT_DIALOG_OPEN', {isAddProductDialogOpen: !isAddProductDialogOpen})
    const handleToggleProductDialogOk = event => dispatch('SGA_TOGGLE_PRODUCT_DIALOG_OPEN', {isAddProductDialogOpen: !isAddProductDialogOpen})

    return (
        <div className={classes.root}>
            <AppBar position='fixed'>
                <Toolbar disableGutters={!drawerOpen}>
                    <IconButton
                        color='inherit'
                        aria-label='Open drawer'
                        onClick={handleToggleDrawerOpen}
                        className={classNames(classes.menuButton, drawerOpen && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' color='inherit' noWrap>
                        C9 super!!
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant='persistent'
                anchor='left'
                open={drawerOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleToggleDrawerOpen}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['開心 ❤ Share'].map((text, index) => (
                        <ListItem button key={text} onClick={handleToggleProductDialog}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
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
        </div>
    )
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
}

export default withStyles(styles, {withTheme: true})(Header)
