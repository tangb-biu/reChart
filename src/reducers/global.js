import { handleActions } from 'redux-actions'
import { currentAnimate } from '@/actions/global'

export const globals = handleActions({
	[currentAnimate] (state, {paload: {animate}}) {
		return Object.assign({}, state, {animate})
	}
}, {animate: 'normal'})

