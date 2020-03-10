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
		case types.STORY_MSG:
			return {
				...state,
				message: payload
			};
		case types.STORY_PROCESS_COMPLETE:
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
