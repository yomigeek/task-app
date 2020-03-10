import API from '../utilities/api';
import * as types from '../constants/actionTypes';
import jwtDecode from 'jwt-decode';
import {dummyStory, success} from '../data';

const token = localStorage.getItem('token');

const userRole = jwtDecode(token).role.toLowerCase();
const userId = jwtDecode(token).id;


const getStoriesAction = () => async (dispatch) => {
	dispatch({
		type: types.IS_LOADING
  });
  try {
    // const getStoriesUrl = '/api/getStories';
    // const response = await API.get(getStoriesUrl).then((res) => {
    //   return res;
    // });

    // console.log(response);



    let allStories;
    if (userRole === process.env.REACT_APP_ADMIN) {
      allStories = dummyStory
    }
    else {
      allStories = dummyStory.filter(
        (story) => story.createdBy ===  userId
      )
    }

    dispatch({ type: types.GET_ALL_STORIES, payload: allStories });
    dispatch({ type: types.IS_COMPLETE });

  }
  catch{
    const loginError = 'Internet/Server Connection ERROR! Check your Internet Connection';
    dispatch({ type: types.VALIDATION_ERROR, loginError });
  }
	
	return null;
};

const addStoryAction = (storyInfo, history) => async (dispatch) => {
	dispatch({type: types.IS_LOADING});
  dispatch({type: types.ADDING_STORY});

  try {
    const addStoryUrl = '/api/createStory';
    const response = await API.post(addStoryUrl).then((res) => {
      return res;
    });
    dispatch({ type: types.IS_COMPLETE });
    if (response.data.success === true) {
      dispatch({ type: types.ADD_STORY_SUCCESS });
      history.push('/dashboard')
    }
    else {
      dispatch({ type: types.ADD_STORY_FAIL });
    }
  }
  catch{
    const loginError = 'Internet/Server Connection ERROR! Check your Internet Connection';
    dispatch({ type: types.VALIDATION_ERROR, loginError });
  }
	
	return null;
};

const getSingleStoryAction = (storySummary) => async (dispatch) => {
	dispatch({type: types.IS_LOADING});
  try {

    const getStoriesUrl = '/api/getStories';
    const response = await API.get(getStoriesUrl).then((res) => {
      return res;
    });

    const singleStory = response.data.filter(
      (story) => story.summary ===  storySummary
    )   
      dispatch({ type: types.GET_SINGLE_STORY, payload: singleStory });

      dispatch({ type: types.IS_COMPLETE });

  }
  catch{
    const loginError = 'Internet/Server Connection ERROR! Check your Internet Connection';
    dispatch({ type: types.VALIDATION_ERROR, loginError });
  }
	
	return null;
};

const approveStoryAction = (storyInfo) => async (dispatch) => {
  console.log(storyInfo);

}
export { getStoriesAction, addStoryAction, getSingleStoryAction, approveStoryAction };
