import API from '../utilities/api';
import * as types from '../constants/actionTypes';

const loginAction = (userDetails, history) => async (dispatch) => {
	let loginError = '';
	dispatch({
		type: types.IS_LOADING
  });
  dispatch({ 
    type: types.VALIDATION_ERROR, 
    loginError: '' 
  });

	if (userDetails.password.length < 8) {
    loginError = 'Password must be at least 8 character!'
    dispatch({ type: types.VALIDATION_ERROR, loginError });
    dispatch({ type: types.IS_COMPLETE });

	} else {
	try {
		const loginUrl = userDetails.role === 'user' ? '/api/login' : '/api/admin-login';
		const response = await API.post(loginUrl).then((res) => {
			return res;
    });
    if(response.status === 200) {
      dispatch({ type: types.IS_COMPLETE });
      if(response.data.userRoles[0].toLowerCase() === process.env.REACT_APP_ADMIN) {
        dispatch({ type: types.IS_AUTHENTICATED });
        history.push('/dashboard')
      }
      if(response.data.userRoles[0].toLowerCase() === process.env.REACT_APP_USER) {
        dispatch({ type: types.IS_AUTHENTICATED });
        history.push('/dashboard')
      }
    }
	} catch (err) {
		const loginError = 'Internet/Server Connection ERROR! Check your Internet Connection';
		dispatch({ type: types.VALIDATION_ERROR, loginError });
  }
}
	return null;
};

export default loginAction;
