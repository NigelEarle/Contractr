import { handleActions } from 'redux-actions';
import {
  OAUTH_SIGN_IN,
  // OAUTH_SIGN_IN_SUCCESS,
  // OAUTH_SIGN_IN_ERROR,
  OAUTH_SET_TOKEN,
  OAUTH_DISCARD_TOKEN,
  SET_USER,
} from '../actions/oauth';

const initialState = {
  isPending: false,
  provider: '',
  token: '',
  user: {
    given_name: '',
    surname: '',
    email: '',
  }
};

export default handleActions({
  [OAUTH_SIGN_IN]: state => (
    {
      ...state,
      isPending: true
    }
  ),
  // [OAUTH_SIGN_IN_SUCCESS]: state => (
  //   {
  //     ...state,
  //     isPending: false
  //   }
  // ),
  [OAUTH_SET_TOKEN]: (state, action) => (
    {
      ...state,
      isPending: false,
      token: action.token,
    }
  ),
  [OAUTH_DISCARD_TOKEN]: state => (
    {
      ...state,
    }

  ),
  [SET_USER]: (state, action) => (
    {
      ...state,
      user: action.user
    }
  ),
}, initialState);
