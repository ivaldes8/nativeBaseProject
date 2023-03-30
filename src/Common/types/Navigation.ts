import {NavigationProp} from '@react-navigation/native';

export type RootStackNavigation = {
  Login: undefined;
  Logout: undefined;
  Home: undefined;
  Characters: undefined;
};

export type MainNavigationProps = NavigationProp<RootStackNavigation>;
