import { handleActions } from 'redux-actions';
import {
  OAUTH_SIGN_IN_START,
  OAUTH_SIGN_IN_COMPLETE,
  OAUTH_SIGN_IN_ERROR,
} from '../actions/oauth';

const initialState = {
  signing_in: false,
};

export default handleActions({
  [OAUTH_SIGN_IN_START]: (state) => {
    console.log('IN REDUCER');
    return {
      ...state,
      signing_in: true,
    };
  }
}, initialState);
