import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { facebook, google } from 'react-native-simple-auth';
import {
  View,
  Button,
} from 'react-native';

import {
  oauthSignIn,
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
    this.props.oauthSignIn('facebook');
    const FacebookConfig = {
      appId: Facebook.appId,
      callback: Facebook.callback,
    };

    facebook(FacebookConfig)
    .then(({ user, credentials }) => {
      this.props.oauthSignInComplete(credentials, user, this.props.provider);
    })
    .catch((err) => {
      this.props.oauthSignInError(err, 'facebook');
    });
  }

  handleGoogleLogin() {
    this.props.oauthSignIn('google');
    const GoogleConfig = {
      appId: Google.appId,
      callback: Google.callback,
    };

    google(GoogleConfig)
    .then(({ user, credentials }) => {
      this.props.oauthSignInComplete(credentials, user, this.props.provider);
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
  provider: '',
  oauthSignIn: () => {},
  oauthSignInComplete: () => {},
  oauthSignInError: () => {},
};

LoginContainer.propTypes = {
  provider: PropTypes.string.isRequired,
  oauthSignIn: PropTypes.func.isRequired,
  oauthSignInComplete: PropTypes.func.isRequired,
  oauthSignInError: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    provider: state.oauth.provider,
  }
);

export default connect(mapStateToProps, {
  oauthSignIn,
  oauthSignInComplete,
  oauthSignInError,
})(LoginContainer);
