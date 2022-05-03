import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countries: undefined,
    randomCountry: undefined
};

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        addCountries: (state, { payload }) => {
            state.countries = payload;
            state.countries.every(c => c.comments.sort((a, b) => b.id - a.id));
        },
        addRandomCountry: (state, {payload}) => {
            state.randomCountry = payload;
        },
        addComment: (state, { payload }) => {
            const country = state.countries.find(c => c.id === payload.countryId);
            const comments = [...country.comments, payload.comment];
            comments.sort((a, b) => b.id - a.id);
            country.comments = comments;
        },
        updateComment: (state, { payload }) => {
            const country = state.countries.find(c => c.id === payload.countryId);
            let comments = country.comments.filter(c => c.id !== payload.updatedComment.id);
            comments = [...comments, payload.updatedComment];
            comments.sort((a, b) => b.id - a.id);
            country.comments = comments;
        },
        deleteComment: (state, { payload }) => {
            const country = state.countries.find(c => c.id === payload.countryId);
            country.comments = 
                country.comments.filter(c => c.id !== payload.comment.id);
        }
    }
});

export const { 
    addCountries,
    addRandomCountry,
    addComment,
    updateComment,
    deleteComment
} = countriesSlice.actions;

export default countriesSlice.reducer;


