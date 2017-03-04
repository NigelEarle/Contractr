import { TabNavigator } from 'react-navigation';

import {
  LoginContainer,
  JobsContainer,
} from '../containers/index';

const AppRouteConfig = {
  Login: { screen: LoginContainer },
  Jobs: { screen: JobsContainer },
};

const AppNavigator = TabNavigator(AppRouteConfig); // eslint-disable-line
export default AppNavigator;
