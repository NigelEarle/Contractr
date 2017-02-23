import React from 'react';
import { Provider } from 'react-redux';
import {
  AppRegistry,
} from 'react-native';

import ContractrRouter from './routes';
import configureStore from './store/configStore';

const store = configureStore();

const Contractr = () => (
  <Provider store={store}>
    <ContractrRouter />
  </Provider>
);

AppRegistry.registerComponent('Contractr', () => Contractr);
