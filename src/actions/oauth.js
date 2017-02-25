// import OAuthService from '../services/oauth';

export const OAUTH_SIGN_IN = 'auth/OAUTH_SIGN_IN';
export const OAUTH_SIGN_IN_SUCCESS = 'auth/OAUTH_SIGN_IN_SUCCESS';
export const OAUTH_SIGN_IN_ERROR = 'auth/OAUTH_SIGN_IN_ERROR';
export const OAUTH_SET_TOKEN = 'auth/SET_AUTH_TOKEN';
export const OAUTH_DISCARD_TOKEN = 'auth/DISCARD_AUTH_TOKEN';
export const SET_USER_SUCCESS = 'auth/SET_USER_SUCCESS';
export const SET_USER_FAIL = 'auth/SET_USER_FAIL';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'auth/LOGOUT_ERROR';

export const oauthSignin = provider => (
  (dispatch) => {
    dispatch({
      type: OAUTH_SIGN_IN,
      provider,
    });
  }
);

export const oauthSetToken = token => (
  {
    type: OAUTH_SET_TOKEN,
    token,
  }
);

export const oauthDiscardToken = () => (
  {
    type: OAUTH_DISCARD_TOKEN,
  }
);

export const setUserSuccess = user => (
  {
    type: SET_USER_SUCCESS,
    user
  }
);

export const setUserFail = () => (
  {
    type: SET_USER_FAIL,
  }
);

export const logoutSuccess = () => (
  {
    type: OAUTH_LOGOUT_SUCCESS,
  }
);

export const logoutFail = () => (
  {
    type: OAUTH_LOGOUT_FAIL,
  }
);

export const logout = () => (dispatch) => (
  // Send logout req to server
  logoutSuccess();
  oauthDiscardToken();
  logoutFail();
);

export const oauthSigninSuccess = (credentials, user) => (dispatch) => {
  // Save user to REST API
  oauthSetToken(credentials);
  setUserSuccess(user);
  setUserFail();
};

export const oauthSigninError = (err) => (dispatch) => (
  dispatch({
    type: OAUTH_SIGN_IN_ERROR,
    err
  })
);
