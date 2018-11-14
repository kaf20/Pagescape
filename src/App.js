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

    return (
        <BrowserRouter>
            <div className='App'>
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
            </div>
        </BrowserRouter>
    )
}

App.propTypes = {
    store: PropTypes.object.isRequired
}

// export default App
export default withStyles(styles, {withTheme: true})(App)
