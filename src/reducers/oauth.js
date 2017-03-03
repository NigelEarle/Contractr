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
  refreshToken: null,
  err: null,
  user: {
    name: '',
    email: '',
    picture: null,
    token: null,
    facebook_id: null,
    google_id: null,
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
      refreshToken: action.refreshToken ? action.refreshToken : null,
      user: {
        ...action.user
      },
    }
  ),
  [OAUTH_SIGN_IN_ERROR]: (state, action) => (
    {
      ...state,
      err: action.err,
    }
  ),
  [LOGOUT_SUCCESS]: state => (
    {
      ...state,
      token: null,
      refreshToken: null,
      user: {
        name: '',
        email: '',
        picture: '',
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
