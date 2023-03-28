import {NavigationProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export type MainNavigationProps = NavigationProp<RootStackParamList>;
