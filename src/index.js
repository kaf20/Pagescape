import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer/reducer";
import {rootSaga} from "./sagas/sagas";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#313131'
        },
        secondary: {
            main: '#ffea00'
        }
    }
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const render = () => {
    ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <App store={store}/>
        </MuiThemeProvider>
        , document.getElementById('root'))
}

render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
