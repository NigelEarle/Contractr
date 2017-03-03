import OAuthService from '../services/oauth';
import {
  AsyncStorage,
} from 'react-native';

export const OAUTH_SIGN_IN = 'auth/OAUTH_SIGN_IN';
export const OAUTH_SIGN_IN_SUCCESS = 'auth/OAUTH_SIGN_IN_SUCCESS'; // incorporate success and fail actions for all
export const OAUTH_SIGN_IN_ERROR = 'auth/OAUTH_SIGN_IN_ERROR';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'auth/LOGOUT_ERROR';
const ACCESS_TOKEN = 'access-token';
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

export const oauthSignInComplete = (credentials, user, provider) => dispatch => (
  // Save user to REST API
  OAuthService.register(credentials, user, provider)
  .then((jsonResponse) => {
    AsyncStorage.setItem(ACCESS_TOKEN, jsonResponse.token);
    dispatch(oauthSignInSuccess(jsonResponse));
  })
  .catch((err) => {
    oauthSignInError(err);
  })
);

