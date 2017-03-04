import { TabNavigator } from 'react-navigation';

import {
  LoginContainer,
  JobsContainer,
} from '../containers/index';

const AppRouteConfig = {
  Login: { screen: LoginContainer },
  Jobs: { screen: JobsContainer },
};

const AppNavigator = new TabNavigator(AppRouteConfig);
export default AppNavigator;
