import * as types from '../constants/actionTypes';

const initialState = {
	stories: [],
	message: {
		category: '',
		value: ''
	},
	singleStory: []
};
const storyReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.GET_ALL_STORIES:
			return {
				...state,
				stories: payload
			};
		case types.GET_SINGLE_STORY:
			return {
				...state,
				singleStory: payload
			};
		// case types.UPDATE_STORY:
		// 	return {
		// 		...state,
		// 		stories: payload
		// 	};
		case types.ADD_STORY_SUCCESS:
			return {
				...state,
				message: {
					category: 'success',
					value: 'Story has been added successfully!'
				}
			};
		case types.ADD_STORY_FAIL:
			return {
				...state,
				message: {
					category: 'error',
					value: 'Error! Story could not be added. Check connection!'
				}
			};
		case types.ADDING_STORY:
			return {
				...state,
				message: {
					category: '',
					value: ''
				}
			};
		default:
			return state;
	}
};

export default storyReducer;
