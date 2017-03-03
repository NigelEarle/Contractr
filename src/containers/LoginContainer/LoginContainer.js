import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { facebook, google } from 'react-native-simple-auth';
import {
  View,
  Button,
} from 'react-native';

import {
  oauthSignInComplete,
  oauthSignInError,
} from '../../actions/oauth';

import { Facebook, Google } from '../../config/oauth.json';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handleFbLogin = this.handleFbLogin.bind(this);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }

  handleFbLogin() {
    const FacebookConfig = {
      appId: Facebook.appId,
      callback: Facebook.callback,
    };

    facebook(FacebookConfig)
    .then(({ user, credentials }) => {
      this.props.oauthSignInComplete(credentials, user, 'facebook');
    })
    .catch((err) => {
      this.props.oauthSignInError(err, 'facebook');
    });
  }

  handleGoogleLogin() {
    const GoogleConfig = {
      appId: Google.appId,
      callback: Google.callback,
    };

    google(GoogleConfig)
    .then(({ user, credentials }) => {
      this.props.oauthSignInComplete(credentials, user, 'google');
    })
    .catch((err) => {
      this.props.oauthSignInError(err, 'google');
    });
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.handleFbLogin}
          title="Facebook"
        />
        <Button
          onPress={this.handleGoogleLogin}
          title="Google"
        />
      </View>
    );
  }
}

LoginContainer.defaultProps = {
  oauthSignInComplete: () => {},
  oauthSignInError: () => {},
};

LoginContainer.propTypes = {
  oauthSignInComplete: PropTypes.func.isRequired,
  oauthSignInError: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  { state }
);

export default connect(mapStateToProps, {
  oauthSignInComplete,
  oauthSignInError,
})(LoginContainer);
