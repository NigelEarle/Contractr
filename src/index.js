import React, { Component } from 'react';
import { facebook, google } from 'react-native-simple-auth';
import { Facebook, Google } from './config/config.json';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Contractr extends Component {
  constructor(props) {
    super(props);
    this.handleFbLogin = this.handleFbLogin.bind(this);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);

    this.state = {
      data: '',
    };
  }

  handleFbLogin() {
    const FacebookConfig = {
      appId: Facebook.appId,
      callback: Facebook.callback,
    };

    facebook(FacebookConfig)
    .then((info) => {
      this.setState({
        data: info
      });
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
      this.setState({
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={this.handleFbLogin}
          title="Facebook"
        />
        <Button
          onPress={this.handleGoogleLogin}
          title="Google"
        />
        <Text style={styles.instructions}>
          Press Cmd to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Contractr', () => Contractr);
