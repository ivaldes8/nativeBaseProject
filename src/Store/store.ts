import {rickAndMortyApi} from './Reducers/rickAndMortyApi';
import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import loginReducer from './Reducers/loginSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['rickAndMortyApi'],
};

export const rootReducers = combineReducers({
  login: loginReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rickAndMortyApi.middleware),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
