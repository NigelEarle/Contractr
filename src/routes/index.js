import React, { PropTypes } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Navigator from '../config/navigator';

const ContractrRouter = ({ dispatch, nav }) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
  />
);

const mapStateToProps = state => (
  { nav: state.nav }
);

ContractrRouter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.any.isRequired,
};

export default connect(mapStateToProps, {})(ContractrRouter);
