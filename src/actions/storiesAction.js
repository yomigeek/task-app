import API from '../utilities/api';
import * as types from '../constants/actionTypes';


const getStoriesAction = (userInfo) => async (dispatch) => {
	dispatch({
		type: types.IS_LOADING
  });
  try {
    const getStoriesUrl = '/getStories';
    const response = await API.get(getStoriesUrl).then((res) => {
      return res;
    });

    let allStories;
    if (userInfo.role === process.env.REACT_APP_ADMIN) {
      allStories = response.data.data
    }
    else {
      allStories = response.data.data.filter(
        (story) => story.createdBy ===  userInfo.id
      )
    }

    dispatch({ type: types.GET_ALL_STORIES, payload: allStories });
    dispatch({ type: types.IS_COMPLETE });

  }
  catch{
    const appError = 'Internet/Server Connection ERROR! Check your Internet Connection';
    dispatch({ type: types.APP_ERROR, appError });
  }
	
	return null;
};

const addStoryAction = (history) => async (dispatch) => {
	dispatch({type: types.IS_LOADING});
  dispatch({type: types.STORY_PROCESS_COMPLETE});

  try {
    const addStoryUrl = '/createStory';
    const response = await API.post(addStoryUrl).then((res) => {
      return res;
    });
    dispatch({ type: types.IS_COMPLETE });
    const payload = {
      category: 'success',
      value: 'Story has been added successfully!'
    }
    if (response.data.success === true) {
      dispatch({ type: types.STORY_MSG, payload });
      window.setTimeout( () => {
        dispatch({ type: types.STORY_PROCESS_COMPLETE });
        history.push('/dashboard')
    }, 2000);
      
    }
    else {
      const payload = {
        category: 'error',
				value: 'Error! Story could not be added. Check connection!'
      }
      dispatch({ type: types.STORY_MSG, payload});
    }
  }
  catch{
    const appError = 'Internet/Server Connection ERROR! Check your Internet Connection';
    dispatch({ type: types.APP_ERROR, appError });
  }
	
	return null;
};

const getSingleStoryAction = (storyId) => async (dispatch) => {
	dispatch({type: types.IS_LOADING});
  try {
    const getStoriesUrl = '/getStories';
    const response = await API.get(getStoriesUrl).then((res) => {
      return res;
    });
    const singleStory = response.data.data.filter(
      (story) => story.id ===  parseInt(storyId, 10)
    )   
      dispatch({ type: types.GET_SINGLE_STORY, payload: singleStory });

      dispatch({ type: types.IS_COMPLETE });

  }
  catch{
    const appError = 'Internet/Server Connection ERROR! Check your Internet Connection';
    dispatch({ type: types.APP_ERROR, appError });
  }
	return null;
};

const storyStatusAction = (storyInfo, category, history) => async (dispatch) => {
  if (category === 'approve') {
    dispatch({ type: types.GET_SINGLE_STORY, payload: storyInfo });
    const payload = {
      category: 'status',
      value: 'Story status updated to approved!'
    }
    dispatch({ type: types.STORY_MSG, payload});
    window.setTimeout( () => {
      dispatch({ type: types.STORY_PROCESS_COMPLETE });
      history.push('/dashboard')
  }, 2000);
  } else {
    dispatch({ type: types.GET_SINGLE_STORY, payload: storyInfo });
    const payload = {
      category: 'status',
      value: 'Story status updated to rejected!'
    }
    dispatch({ type: types.STORY_MSG, payload});
    window.setTimeout( () => {
      dispatch({ type: types.STORY_PROCESS_COMPLETE });
      history.push('/dashboard')
  }, 2000);
  }



}
export { getStoriesAction, addStoryAction, getSingleStoryAction, storyStatusAction };
