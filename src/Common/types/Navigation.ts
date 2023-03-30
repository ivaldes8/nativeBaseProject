import {NavigationProp} from '@react-navigation/native';

export type RootStackNavigation = {
  Login: undefined;
  Logout: undefined;
  Home: undefined;
  Characters: undefined;
};

export type MainNavigationProps = NavigationProp<RootStackNavigation>;

export type CharacterStack = {
  CharacterList: undefined;
  CharacterEdit: {id: string | number};
};

export type CharacterStackProps = NavigationProp<CharacterStack>;
