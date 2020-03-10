import API from '../utilities/api';
import * as types from '../constants/actionTypes';
import clearLocalStorage from '../utilities/clearData';

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
		loginError = 'Password must be at least 8 character!';
		dispatch({ type: types.VALIDATION_ERROR, loginError });
		dispatch({ type: types.IS_COMPLETE });
	} else {
		try {
			const loginUrl = userDetails.role === 'user' ? '/login' : '/admin-login';
			const response = await API.post(loginUrl).then((res) => {
				return res;
			});
			if (response.status === 200) {
				dispatch({ type: types.IS_COMPLETE });
				let token = '';
				if (response.data.userRoles[0].toLowerCase() === process.env.REACT_APP_ADMIN) {
					token = process.env.REACT_APP_ADMIN_TOKEN;
					localStorage.setItem('token', token);
					localStorage.setItem('isAuthenticated', 'true');
					dispatch({ type: types.IS_AUTHENTICATED });
					history.push('/dashboard');
				}
				if (response.data.userRoles[0].toLowerCase() === process.env.REACT_APP_USER) {
					token = process.env.REACT_APP_USER_TOKEN;
					localStorage.setItem('token', token);
					localStorage.setItem('isAuthenticated', 'true');
					dispatch({ type: types.IS_AUTHENTICATED });
					history.push('/create');
				}
			}
		} catch (err) {
			const loginError = 'Internet/Server Connection ERROR! Check your Internet Connection';
			dispatch({ type: types.VALIDATION_ERROR, loginError });
		}
	}
	return null;
};

const updateUserInfoAction = (userInfo) => async (dispatch) => {
	dispatch({ type: types.UPDATE_USER_INFO, payload: userInfo });
	dispatch({
		type: types.UPDATE_USER_INFO,
		payload: userInfo
	});
};

const logOutAction = (history) => async (dispatch) => {
	clearLocalStorage();
	dispatch({ type: types.USER_LOGOUT_SUCCESS });
	history.push('/login');
};

export { loginAction, updateUserInfoAction, logOutAction };
