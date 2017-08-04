import { createActions } from 'redux-actions'

export const { currentAnimate } = createActions({
	CURRENT_ANIMATE: animate => ({ animate })
})

