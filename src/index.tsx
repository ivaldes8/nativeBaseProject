import React from 'react';
import AppLoading from './AppLoading';
import AppNavigator from './AppNavigator';

const AppContainer = () => {
  return (
    <>
      <AppNavigator />
      <AppLoading />
    </>
  );
};

export default AppContainer;
