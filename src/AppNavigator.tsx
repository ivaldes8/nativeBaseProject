import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigation} from './Common/types/Navigation';
import Home from './screens/Home';
import {
  CHARACTERS_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
} from './Common/constants/navigation';
import Login from './screens/Login';
import CharacterList from './screens/CharacterList';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const AppNavigator = () => {
  const RootTab = createMaterialBottomTabNavigator<RootStackNavigation>();
  const user = {name: 'Ivan', id: '1'};

  return (
    <NavigationContainer>
      <RootTab.Navigator initialRouteName={user ? HOME_SCREEN : LOGIN_SCREEN}>
        <RootTab.Screen name={HOME_SCREEN} component={Home} />
        <RootTab.Screen name={CHARACTERS_SCREEN} component={CharacterList} />
        <RootTab.Screen name={LOGIN_SCREEN} component={Login} />
      </RootTab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
