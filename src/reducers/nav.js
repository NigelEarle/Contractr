import Navigator from '../config/Navigator';

const nav = (state, action) => {
  const newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
};

export default nav;
