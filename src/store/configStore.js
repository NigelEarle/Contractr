/* eslint global-require: 0 */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducer from '../reducers';


export default function configureStore(initialState) {
  // adjust for production
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  );
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('../reducers').default);
    });
  }
  return store;
}
