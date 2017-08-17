import { createActions } from 'redux-actions'

export const { loadStatus} = createActions({
	LOADING_STATUS: (status, response) => ({ status, response })
})