import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { facebook, google } from 'react-native-simple-auth';
import {
  View,
  Button,
} from 'react-native';

import { oauthSignin } from '../../actions/oauth';
import { Facebook, Google } from '../../config/oauth.json';

class LoginContainer extends Component {
  static propTypes = {
    oauthSignin: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleFbLogin = this.handleFbLogin.bind(this);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }


  handleFbLogin() {
    const {
      oauthSignin,
      oauthSigninSuccess,
      oauthSigninFailure
    } = this.props;
    oauthSignin();
    const FacebookConfig = {
      appId: Facebook.appId,
      callback: Facebook.callback,
    };

    facebook(FacebookConfig)
    .then((info) => {
      console.log(info);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleGoogleLogin() {
    this.props.oauthSignin();
    const GoogleConfig = {
      appId: Google.appId,
      callback: Google.callback,
    };

    google(GoogleConfig)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
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

const mapStateToProps = state => (
  {
    state,
  }
);


export default connect(mapStateToProps, {
  oauthSignin,
})(LoginContainer);
