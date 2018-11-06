import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import reducer from './reducer/reducer'
import {rootSaga} from './sagas/sagas'
import Home from './component/Home'
import ErrorPage from './component/common/ErrorPage'
import Footer from './component/common/Footer';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const dispatch = type => store.dispatch({type})

const containerStyle = {
    backgroundImage: 'url(\'https://www.solidbackgrounds.com/images/2560x1440/2560x1440-davys-grey-solid-color-background.jpg\')',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

function render() {
    ReactDOM.render(
        <BrowserRouter>
            <div className="mdl-layout mdl-js-layout" style={containerStyle}>
                <header className="mdl-layout__header mdl-layout__header--transparent">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">Title</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation">
                            <a className="mdl-navigation__link" href="">Link</a>
                            <a className="mdl-navigation__link" href="">Link</a>
                            <a className="mdl-navigation__link" href="">Link</a>
                            <a className="mdl-navigation__link" href="">Link</a>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Title</span>
                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                </div>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <Switch>
                            <Route exact path='/' render={props => (
                                <Home dispatch={dispatch} state={store.getState()}/>
                            )}/>
                            <Route component={ErrorPage}/>
                        </Switch>
                    </div>
                </main>
                <Footer dispatch={dispatch} state={store.getState()}/>
            </div>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
