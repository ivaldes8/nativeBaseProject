import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {logout, selectUser} from '../Store/Reducers/loginSlice';
import {User} from '../Common/types/Api';
import {useAppSelector, useAppDispatch} from '../Store/hooks';
import {HOME_SCREEN} from '../Common/constants/navigation';
import {MainNavigationProps} from '../Common/types/Navigation';

const Logout = () => {
  const navigator = useNavigation<MainNavigationProps>();
  const user: User = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout({name: '', email: ''}));
    navigator.navigate(HOME_SCREEN);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Logut</Text>
      <Text style={styles.secundaryText}>{user.name}</Text>
      <Text style={styles.secundaryText}>{user.email}</Text>
      <Button onPress={() => handleLogout()} title="Push me to Logout" />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  homeText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  secundaryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
