import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';

class JobsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        Jobs Container
      </View>
    );
  }
}

const mapStateToProps = state => (
  { state }
);

JobsContainer.defaultProps = {};
JobsContainer.propTypes = {};

export default connect(mapStateToProps, {})(JobsContainer);
