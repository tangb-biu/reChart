import { createActions } from 'redux-actions'

export const { currentAnimate, loadData } = createActions({
	CURRENT_ANIMATE: animate => ({ animate }),
	LOAD_DATA: (status, response) => ({status, response}) /*{
		return (dispatch) => {
			console.log(dispatch);
			return { status, response }
		}
	}*/
})

