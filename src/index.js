import React, { Component } from 'react';
import { facebook } from 'react-native-simple-auth';
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
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const config = {
      appId: '1851993958375026',
      callback: 'fb1851993958375026://authorize',
    };
    facebook(config)
    .then((info) => {
      this.setState({
        data: info
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          onPress={this.handlePress}
          title="Facebook"
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
