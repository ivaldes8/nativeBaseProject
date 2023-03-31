import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigation} from './Common/types/Navigation';
import Home from './screens/Home';
import {
  CHARACTERS_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
  LOGOUT_SCREEN,
} from './Common/constants/navigation';
import Login from './screens/Login';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useAppSelector} from './Store/hooks';
import {selectUser} from './Store/Reducers/loginSlice';
import Logout from './screens/Logout';
import {User} from './Common/types/Api';
import CharacterNavigator from './screens/Character/CharacterNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppNavigator = () => {
  const RootTab = createMaterialBottomTabNavigator<RootStackNavigation>();
  const user: User = useAppSelector(selectUser);

  return (
    <NavigationContainer>
      <RootTab.Navigator initialRouteName={user ? HOME_SCREEN : LOGIN_SCREEN}>
        <RootTab.Screen
          name={HOME_SCREEN}
          component={Home}
          options={{
            tabBarLabel: 'Home',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: () => <MaterialCommunityIcons name="home" size={26} />,
          }}
        />
        <RootTab.Screen
          name={CHARACTERS_SCREEN}
          component={CharacterNavigator}
          options={{
            tabBarLabel: 'Characters',
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: () => (
              <MaterialCommunityIcons name="penguin" size={26} />
            ),
          }}
        />
        {user && user.name !== '' ? (
          <RootTab.Screen
            name={LOGOUT_SCREEN}
            component={Logout}
            options={{
              tabBarLabel: 'Logout',
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: () => (
                <MaterialCommunityIcons name="logout-variant" size={26} />
              ),
            }}
          />
        ) : (
          <RootTab.Screen
            name={LOGIN_SCREEN}
            component={Login}
            options={{
              tabBarLabel: 'Login',
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: () => (
                <MaterialCommunityIcons name="login-variant" size={26} />
              ),
            }}
          />
        )}
      </RootTab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
