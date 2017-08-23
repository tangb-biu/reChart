import { createActions } from 'redux-actions'

export const { loadStatus} = createActions({
	LOADING_STATUS: (status, response) => {
		return (dispatch) => {
			console.log(dispatch);
			return { status, response }
		}
	}
})