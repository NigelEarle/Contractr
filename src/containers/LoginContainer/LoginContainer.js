import React, { Component } from 'react';
import { facebook, google } from 'react-native-simple-auth';
import {
  View,
  Button,
} from 'react-native';

import { Facebook, Google } from '../../config/OAuth.json';

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
    .then((info) => {
      console.log(info);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleGoogleLogin() {
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

export default LoginContainer;
