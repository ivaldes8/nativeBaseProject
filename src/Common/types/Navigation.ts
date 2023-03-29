import {NavigationProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Characters: undefined;
  Profile: {userId: string};
  Counter: undefined;
};

export type MainNavigationProps = NavigationProp<RootStackParamList>;
