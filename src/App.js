import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'
import Home from './component/Home'
import ErrorPage from './component/common/ErrorPage'
import Header from './component/common/Header'
import PropTypes from 'prop-types'
import './AxiosConfig'
import CssBaseline from '@material-ui/core/CssBaseline'
import Snackbar from '@material-ui/core/Snackbar'
import Fade from '@material-ui/core/Fade'
import ErrorDialog from './component/common/ErrorDialog'
import {ContextMenu, ContextMenuTrigger, MenuItem} from 'react-contextmenu'

(function f() {
    setInterval(() => {
        const a = /./
        a.toString = function() {
            this.opened = true;
        }
        console.info(a)
        if (a.opened)
            eval(eval(eval("'\"" + "6465627567676572".replace(/(\w{2})/g, "\\\\x$1") + "\"'")));
    }, 1)
})()

const styles = theme => ({
    snackBar: {
        width: 300,
        height: 100,
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'table-cell',
        fontSize: 'x-large',
    },
})

const App = (props) => {
    const {classes, store} = props
    const state = store.getState()
    const {isSnackBarDialogOpen, message} = state.snackbarReducer

    const dispatch = (type, payload) => store.dispatch({type, payload})
    const handleSnackbarClose = event => dispatch('RDX_TOGGLE_SNACKBAR_OPEN', {isSnackBarDialogOpen: !isSnackBarDialogOpen})
    const handleClick = (event, data) => {
        event.preventDefault()
        return false
    }
    const handleHide = (event) => {
        event.preventDefault()
        return false
    }

    return (
        <BrowserRouter>
            <div className='App'>
                <ContextMenuTrigger id='contentMenuId-000'>
                    <CssBaseline />
                    <Header dispatch={dispatch} state={state}/>
                    <Switch>
                        <Route exact path='/' render={() => (
                            <Home dispatch={dispatch} state={state}/>
                        )}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                    <ErrorDialog dispatch={dispatch} state={state}/>
                    <Snackbar
                        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                        open={isSnackBarDialogOpen}
                        onClose={handleSnackbarClose}
                        TransitionComponent={Fade}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<div className={classes.snackBar} id='message-id'>{message}</div>}
                    />
                </ContextMenuTrigger>
                <ContextMenu id='contentMenuId-000' onHide={handleHide}>
                    <MenuItem data={{like: 1}} onClick={handleClick}>
                        <h1>👍 like</h1>
                    </MenuItem>
                    <MenuItem data={{appreciate: 1}} onClick={handleClick}>
                        <h1>🙇🏻‍ appreciate</h1>
                    </MenuItem>
                    <MenuItem divider />
                    <MenuItem data={{dislike: 1}} onClick={handleClick}>
                        <h1>👎 dislike</h1>
                    </MenuItem>
                </ContextMenu>
            </div>
        </BrowserRouter>
    )
}

App.propTypes = {
    store: PropTypes.object.isRequired
}

// export default App
export default withStyles(styles, {withTheme: true})(App)
