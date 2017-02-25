import { handleActions } from 'redux-actions';
import {
  OAUTH_SIGN_IN,
  OAUTH_SIGN_IN_SUCCESS,
  OAUTH_SIGN_IN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from '../actions/oauth';

const initialState = {
  isPending: false,
  provider: '',
  token: null,
  refreshToken: null,
  err: null,
  user: {
    given_name: '',
    surname: '',
    email: '',
    profile_pic: '',
  }
};

export default handleActions({
  [OAUTH_SIGN_IN]: (state, action) => (
    {
      ...state,
      provider: action.provider,
      isPending: true,
    }
  ),

  [OAUTH_SIGN_IN_SUCCESS]: (state, action) => (
    {
      ...state,
      isPending: false,
      token: action.token,
      refreshToken: action.refreshToken ? action.refreshToken : null,
      user: {
        ...action.user
      },
    }
  ),
  [OAUTH_SIGN_IN_ERROR]: state => (
    {
      ...state,
    }
  ),
  [LOGOUT_SUCCESS]: state => (
    {
      ...state,
      token: null,
      refreshToken: null,
      user: {
        given_name: '',
        surname: '',
        email: '',
        profile_pic: '',
      }
    }
  ),
  [LOGOUT_ERROR]: (state, action) => (
    {
      ...state,
      err: action.err,
    }
  ),
}, initialState);
