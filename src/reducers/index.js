import { combineReducers } from 'redux';
import nav from './nav';
import oauth from './oauth';

export default combineReducers({
  nav,
  oauth,
});
