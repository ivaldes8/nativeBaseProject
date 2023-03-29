import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './Common/types/Navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Profile from './screens/Profile';
import {
  CHARACTERS_SCREEN,
  COUNTER_SCREEN,
  HOME_SCREEN,
  PROFILE_SCREEN,
} from './Common/constants/navigation';
import Counter from './screens/Counter';
import CharacterList from './screens/CharacterList';

const AppNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const user = {name: 'Ivan', id: '1'};
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={HOME_SCREEN}>
        <RootStack.Screen name={HOME_SCREEN} component={Home} />
        <RootStack.Screen name={CHARACTERS_SCREEN} component={CharacterList} />
        <RootStack.Screen name={COUNTER_SCREEN} component={Counter} />
        <RootStack.Screen
          name={PROFILE_SCREEN}
          component={Profile}
          initialParams={{userId: user.id}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
