import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
//import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from '@/reducers/index'
import App from '@/App'


const history = createHistory()
const middleware = routerMiddleware(history)
const middlewares = [promiseMiddleware, middleware, createLogger]
const store = createStore(rootReducer, applyMiddleware(...middlewares))

ReactDOM.render(
	<AppContainer>
		<Provider store={store}>
			<App />
		</Provider>
	</AppContainer>, 
	document.getElementById('root')
)