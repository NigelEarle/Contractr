import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import {
  navReducer,
} from '../reducers/navReducer';

console.log('NAV REDUCER', navReducer);
const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);

export default function configureStore(data = {}) {
  const rootReducer = combineReducers({
    navReducer,
  });
  return createStore(rootReducer, data, middleware);
}
