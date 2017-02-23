import { TabNavigator } from 'react-navigation';

import {
  LoginContainer,
} from '../containers/index';

const AppRouteConfig = {
  Login: { screen: LoginContainer },
};

const AppNavigator = TabNavigator(AppRouteConfig); // eslint-disable-line
export default AppNavigator;
