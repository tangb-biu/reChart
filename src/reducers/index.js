import { combineReducers } from 'redux'
import { routerReducer } from  'react-router-redux'
import { globals } from './global'

const rootReducer = combineReducers({
	routing: routerReducer,
	globals
})

export default rootReducer