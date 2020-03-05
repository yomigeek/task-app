import * as types from '../constants/actionTypes';

const initialState = {
  loginError: '',
  isAuthenticated: false,
};
const authReducer = (state = initialState, action) => {
  const { type, loginError } = action;
  switch (type) {
    case types.VALIDATION_ERROR:
      return {
        ...state,
        loginError,
      };
    case types.IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default authReducer;
