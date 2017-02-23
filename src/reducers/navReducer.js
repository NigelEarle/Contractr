import Navigator from '../config/Navigator';

export default function navReducer(state, action) {
  const newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
}
