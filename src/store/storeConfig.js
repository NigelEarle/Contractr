import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'react-redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

export default (data = {}) => {
  const rootReducer = combineReducers({
    // define reducers
  });
  return createStore(rootReducer, data, middleware);
};
