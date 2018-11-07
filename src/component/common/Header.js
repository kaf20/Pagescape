import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import classNames from 'classnames'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const drawerWidth = 240

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
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
    const {baseCurrency, baseCurrencyList, alternateCurrency, alternateCurrencyList} = state.baseCurrencyReducer
    const baseCurrencyMenuItems = []
    const alternateCurrencyMenuItems = []
    for (const i in baseCurrencyList)
        baseCurrencyMenuItems.push(<MenuItem key={`currencyMenuItem-${i}`} value={baseCurrencyList[i]}>{baseCurrencyList[i].toUpperCase()}</MenuItem>)
    for (const i in alternateCurrencyList)
        alternateCurrencyMenuItems.push(<MenuItem key={`currencyMenuItem-${i}`} value={alternateCurrencyList[i]}>{alternateCurrencyList[i].toUpperCase()}</MenuItem>)

    const handleToggleDrawerOpen = event => dispatch('RDX_TOGGLE_DRAWER_OPEN')
    const handleBaseCurrencyChange = event => dispatch('RDX_CHANGE_BASE_CURRENCY', event.target.value)
    const handleAlternateCurrencyChange = event => dispatch('RDX_CHANGE_ALTERNATE_CURRENCY', event.target.value)
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position='fixed'
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: drawerOpen,
                })}
            >
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
                        外幣匯率比較
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
                <FormControl className={classes.formControl} error>
                    <InputLabel htmlFor='name-error'>我想比較</InputLabel>
                    <Select
                        value={baseCurrency}
                        onChange={handleBaseCurrencyChange}
                        name='name'
                        renderValue={value => `⚠️  - ${value.toUpperCase()}`}
                        input={<Input id='name-error' />}
                    >
                        {baseCurrencyMenuItems}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl} error>
                    <InputLabel htmlFor='name-error'>兌換</InputLabel>
                    <Select
                        value={alternateCurrency}
                        onChange={handleAlternateCurrencyChange}
                        name='name'
                        renderValue={value => `⚠️  - ${value.toUpperCase()}`}
                        input={<Input id='name-error' />}
                    >
                        {alternateCurrencyMenuItems}
                    </Select>
                </FormControl>
            </Drawer>
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
