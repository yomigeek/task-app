import * as types from '../constants/actionTypes';
const initialState = {
	appLoader: false
};

const loaderReducer = (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case types.IS_LOADING:
			return {
				...state,
				appLoader: true
			};
		case types.IS_COMPLETE:
			return {
				...state,
				appLoader: false
			};
		default:
			return state;
	}
};

export default loaderReducer;
