import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../Store/hooks';
import {login} from '../Store/Reducers/loginSlice';

const Login = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(login({name: 'Ivan', email: 'kaosolution8@gmail.com'}));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Login</Text>
      <Button onPress={() => handleLogin()} title="Push me to login" />
    </View>
  );
};

export default Login;

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
});
