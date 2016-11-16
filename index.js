import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import quotesApp from './reducers'
import thunkMiddleware from 'redux-thunk'
import api from './middleware/api'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(quotesApp, composeEnhancers(
  applyMiddleware(thunkMiddleware, api)
));

// let store = createStoreWithMiddleware(quotesApp)

let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
