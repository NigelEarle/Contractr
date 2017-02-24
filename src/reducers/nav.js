import Navigator from '../config/navigator';

const nav = (state, action) => {
  const newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
};

export default nav;
