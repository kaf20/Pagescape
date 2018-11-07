import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'
import Home from './component/Home'
import ErrorPage from './component/common/ErrorPage'
import Header from './component/common/Header'
import PropTypes from 'prop-types'

const App = (props) => {
    const {store} = props
    const dispatch = (type, payload) => store.dispatch({type, payload})
    return (
        <BrowserRouter>
            <div className='App'>
                <Header dispatch={dispatch} state={store.getState()} title='人民幣兌港元 (CNY vs HKD)'/>
                <Switch>
                    <Route exact path='/' render={() => (
                        <Home dispatch={dispatch} state={store.getState()}/>
                    )}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App
