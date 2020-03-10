import * as types from '../constants/actionTypes';

const initialState = {
	loginError: '',
	appError: '',
	isAuthenticated: false,
	userInfo: []
};
const authReducer = (state = initialState, action) => {
	const { type, loginError, payload, appError } = action;
	switch (type) {
		case types.VALIDATION_ERROR:
			return {
				...state,
				loginError
			};
		case types.APP_ERROR:
			return {
				...state,
				appError
			};
		case types.IS_AUTHENTICATED:
			return {
				...state,
				isAuthenticated: true
			};
		case types.UPDATE_USER_INFO:
			return {
				...state,
				userInfo: payload
			};
		case types.USER_LOGOUT_SUCCESS:
			return state;
		default:
			return state;
	}
};

export default authReducer;
