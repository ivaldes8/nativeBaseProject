import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './src';
import LoadingProvider from './src/Common/contexts/LoadingProvider';
import {store} from './src/Store/store';

const App = () => {
  return (
    <Provider store={store}>
      <LoadingProvider>
        <AppContainer />
      </LoadingProvider>
    </Provider>
  );
};

export default App;
