import { createSlice } from '@reduxjs/toolkit';
import { COUNTRY_RESOURCE_NAME, DISH_RESOURCE_NAME } from '../../consts/consts';


const initialState = {
    userCountries: undefined,
    userDishes: undefined,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addCountriesToUser: (state, { payload }) => {
            state.userCountries = payload;
        },
        addDishesToUser: (state, { payload }) => {
            state.userDishes = payload;
        },
        addResourceToUser: (state, { payload }) => {
            switch (payload.resourceName) {
                case COUNTRY_RESOURCE_NAME:
                    state.userCountries = [...state.userCountries, payload.resource];
                    break;
                case DISH_RESOURCE_NAME:
                    state.userDishes = [...state.userDishes, payload.resource];
                    break;
            }
        },
        deleteResourceFromUser: (state, { payload }) => {
            switch (payload.resourceName) {
                case COUNTRY_RESOURCE_NAME:
                    state.userCountries = state.userCountries.filter(c => c.id !== payload.resource.id);
                    break;
                case DISH_RESOURCE_NAME:
                    state.userDishes = state.userDishes.filter(d => d.id !== payload.resource.id);
                    break;
            }
        }
    }
});

export const {
    addCountriesToUser,
    addDishesToUser,
    addResourceToUser,
    deleteResourceFromUser
} = userSlice.actions;

export default userSlice.reducer;
