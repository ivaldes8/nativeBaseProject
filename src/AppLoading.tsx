import React, {useContext} from 'react';
import {LoadingContext} from './Common/contexts/LoadingProvider';
import Loading from './Components/Loading';

const AppLoading = () => {
  const {loading} = useContext(LoadingContext);
  if (loading) {
    return <Loading />;
  }
  return null;
};

export default AppLoading;
