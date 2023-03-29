import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.loadingBox}>
      <ActivityIndicator color="deepskyblue" size="large" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingBox: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});
