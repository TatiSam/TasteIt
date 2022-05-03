import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import countriesReduser from './slices/countriesSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        countries: countriesReduser
    }
});