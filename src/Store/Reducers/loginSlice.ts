import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../Common/types/Api';
export interface LoginState {
  user: User;
}

const initialState: LoginState = {
  user: {
    name: '',
    email: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = initialState.user;
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
