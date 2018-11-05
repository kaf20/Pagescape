import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Counter from './Counter'
import reducer from './reducer/reducer'
import { rootSaga } from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const dispatch = type => store.dispatch({type})

function render() {
    ReactDOM.render(
        <Counter
            dispatch={dispatch}
            state={store.getState()} />,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
