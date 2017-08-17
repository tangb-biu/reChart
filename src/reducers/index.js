import { combineReducers } from 'redux'
import { routerReducer } from  'react-router-redux'
import { globals } from './global'
import { home } from './home'

const rootReducer = combineReducers({
	routing: routerReducer,
	globals,
	home
})

export default rootReducer