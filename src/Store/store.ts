import {rickAndMortyApi} from './Services/rickAndMortyApi';
import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer from './Reducers/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
