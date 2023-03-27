import React, {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {LoadingContextType} from '../types/Context';

export const LoadingContext = createContext<LoadingContextType>(null!);
const LoadingProvider = ({children}: {children: ReactNode}) => {
  const [loading, setLoading] = useState(false);

  const toggleLoading = useCallback((isLoading: boolean) => {
    setLoading(isLoading);
  }, []);

  const value = useMemo(
    () => ({
      loading,
      toggleLoading,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading],
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export default LoadingProvider;
