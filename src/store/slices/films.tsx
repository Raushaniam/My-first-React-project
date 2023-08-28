import {createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../app/types/IMovie";
import {IStore} from "../../app/types/IStore";
import {getMovieList} from "../thunks/getMovieList";
import {SliceCaseReducers} from "@reduxjs/toolkit/src/createSlice";
import {filterMoviesReducer} from "../reducers/filterMoviesReducer";
import {sortMoviesAction} from "../actions/sortMoviesAction";
import {sortMoviesByNameReducer} from "../reducers/sortMoviesByNameReducer";
import {filterMoviesAction} from "../actions/filterMoviesAction";
import {sortMoviesByYearReducer} from "../reducers/sortMoviesByYearReducer";
import {filmIdReducer} from "../reducers/filmIdReducer";
import {filmIdAction} from "../actions/filmIdAction";
import {setFilterNameReducer} from "../reducers/setFilterNameReducer";
import {setFilterNameAction} from "../actions/setFilterNameAction";
import {setTokenToLocalStorage} from "../thunks/setTokenToLocalStorage";
import {getTokenFromLocalStorage} from "../thunks/getTokenFromLocalStorage";
import {registerUser} from "../thunks/registerUser";
import {loginUser} from "../thunks/loginUser";
import {removeTokenInLocalStorage} from "../thunks/removeTokenInLocalStorage";

export const filmsSlice = createSlice<IStore, SliceCaseReducers<IStore>, 'films'>({
    name: 'films',
    extraReducers: (builder) => {
        builder.addCase(getTokenFromLocalStorage.fulfilled, (state, action) => {
            if (action.payload) {
                state.isLoggedIn = true;
            }
            state.authToken = action.payload;
            console.log(state);
        }).addCase(getMovieList.fulfilled, (state, action) => {
            state.films = action.payload;
            state.filteredFilms = action.payload;
            state.error.message = '';
            state.isLoggedIn = true;
        }).addCase(getMovieList.rejected, (state, action) => {
            const errorObject = JSON.parse(action.payload as string);
            const errorCode = errorObject.status as number;
            if (errorCode >= 400 && errorCode < 500) {
                state.isLoggedIn = false;
            } else {
                state.error = {
                    message: errorObject.message
                };
                state.films = [];
            }
        }).addCase(setTokenToLocalStorage.fulfilled, (state, action) => {
            state.authToken = action.payload;
        }).addCase(registerUser.fulfilled, (state, action) => {
            state.authToken = action.payload.accessToken;
            state.error.message = '';
            state.isLoggedIn = true;
        }).addCase(registerUser.rejected, (state, action) => {
            state.error = {
                message: action.payload as any
            };
        }).addCase(loginUser.fulfilled, (state, action) => {
            state.authToken = action.payload.accessToken;
            state.error.message = '';
            state.isLoggedIn = true;
        }).addCase(loginUser.rejected, (state, action) => {
            state.error = {
                message: action.payload as any
            };
        }).addCase(removeTokenInLocalStorage.fulfilled, (state, action) => {
            state.authToken = action.payload as any;
            state.isLoggedIn = false;
        })
    },
    initialState: {
        films: [] as IMovie[],
        filteredFilms: [] as IMovie[],
        selectedFilm: {
            id: '',
            name: '',
            description: '',
            genre: [],
            img: '',
            year: '',
            duration: ''
        },
        filterName: '',
        authToken: '',
        isLoggedIn: true,
        error: {
            message: ''
        }
    },
    reducers: {
        filterMovies: {
            reducer: filterMoviesReducer,
            prepare: filterMoviesAction
        },
        sortMoviesByName: {
            reducer: sortMoviesByNameReducer,
            prepare: sortMoviesAction
        },
        sortMoviesByYear: {
            reducer: sortMoviesByYearReducer,
            prepare: sortMoviesAction
        },
        setSelectedMovie: {
            reducer: filmIdReducer,
            prepare: filmIdAction
        },
        setFilterName: {
            reducer: setFilterNameReducer,
            prepare: setFilterNameAction
        }
    }
})

export const {filterMovies, sortMoviesByName, sortMoviesByYear, setSelectedMovie, setFilterName} = filmsSlice.actions;

export const filmsReducer = filmsSlice.reducer;