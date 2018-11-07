import React, {Component} from 'react'
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {BrowserRouter, Route, Switch} from "react-router-dom"

import './App.css'
import reducer from './reducer/reducer'
import {rootSaga} from './sagas/sagas'
import Home from './component/Home'
import ErrorPage from './component/common/ErrorPage'
import Header from "./component/common/Header"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const dispatch = type => store.dispatch({type})

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
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
}

export default App
