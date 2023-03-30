import {Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.homeText}>Welcome to Rick and Morty App</Text>
    </SafeAreaView>
  );
};

export default Home;

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
