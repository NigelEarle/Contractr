import { OAuthService } from '../services/oauth';

export const OAUTH_SIGN_IN = 'auth/OAUTH_SIGN_IN';
export const OAUTH_SIGN_IN_SUCCESS = 'auth/OAUTH_SIGN_IN_SUCCESS'; // incorporate success and fail actions for all
export const OAUTH_SIGN_IN_ERROR = 'auth/OAUTH_SIGN_IN_ERROR';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'auth/LOGOUT_ERROR';

export const oauthSignIn = provider => dispatch => (
  dispatch({
    type: OAUTH_SIGN_IN,
    isPending: true,
    provider,
  })
);

export const oauthSignInError = err => dispatch => (
  dispatch({
    type: OAUTH_SIGN_IN_ERROR,
    err
  })
);

export const oauthSignInSuccess = (token, user) => (
  {
    type: OAUTH_SIGN_IN_SUCCESS,
    token,
    user,
  }
);

export const logoutSuccess = () => (
  {
    type: LOGOUT_SUCCESS,
  }
);

export const logoutError = err => (
  {
    type: LOGOUT_ERROR,
    err,
  }
);

export const logout = () => (dispatch) => {
  // Send logout req to server
  dispatch(logoutSuccess());
  dispatch(logoutError());
};

export const oauthSignInComplete = (credentials, user) => (dispatch) => {
  // Save user to REST API
  dispatch(oauthSignInSuccess(token, user)); // result from server on successful store of user
  oauthSignInError(err);
};
