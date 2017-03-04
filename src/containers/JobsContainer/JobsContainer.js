import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

class JobsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Jobs Container</Text>
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
