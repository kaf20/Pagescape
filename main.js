import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import reducer from './reducer/reducer'
import {rootSaga} from './sagas/sagas'
import Counter from './component/Counter'
import ErrorPage from './component/ErrorPage'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const dispatch = type => store.dispatch({type})

function render() {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/counter"/>}/>
                    <Route path="/counter" render={() => (
                        <Counter dispatch={dispatch} state={store.getState()}/>
                    )}/>
                    <Route path="/error" component={ErrorPage}/>
                    <Redirect to="/error"/>
                </Switch>
            </div>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
