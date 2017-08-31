import { handleActions } from 'redux-actions'
import { currentAnimate, currentPage } from '@/actions/global'


export const globals = handleActions({
	[currentAnimate] (state, {payload: {animate}}) {
		return Object.assign({}, state, {animate})
	},
	[currentPage] (state, {payload: {curpage}}) {
		return Object.assign({}, state, {curpage})
	}
}, {animate: 'normal', curpage: '/'})

