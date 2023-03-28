import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './Common/types/Navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Profile from './screens/Profile';
import {HOME_SCREEN, PROFILE_SCREEN} from './Common/constants/navigation';

const AppNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={HOME_SCREEN}>
        <RootStack.Screen name={HOME_SCREEN} component={Home} />
        <RootStack.Screen name={PROFILE_SCREEN} component={Profile} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
