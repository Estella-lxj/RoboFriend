import {
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
	CHANGE_SEARCHFIELD,
} from './constants.js'


export const searchRobots = (state = "", action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCHFIELD:
			return action.payload;
		default:
			return state;
	}
}

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: null
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
	switch (action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true })
		case REQUEST_ROBOTS_SUCCESS:
			return {
				...state,
				isPending: false,
				error: null,
				robots: action.payload,
			}
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, { error: action.payload, isPending: false })
		default:
			return state;
	}
}
