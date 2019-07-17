import { apiCall } from './api/api.js';

import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL,
	OPEN_MODAL,
	CLOSE_MODAL
} from './constants.js';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

export const requestRobots = () => (dispatch) => {
	dispatch({type: REQUEST_ROBOTS_PENDING})
	apiCall('https://jsonplaceholder.typicode.com/users')
			.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
			.catch(error => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error}))
}

export const toggleModal = () => (dispatch) => {
	this.props.toggleModal.isModalOpen ? dispatch({type: CLOSE_MODAL}) :
		dispatch({type: OPEN_MODAL})
}