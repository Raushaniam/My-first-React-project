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
import {setShowDetailsAction} from "../actions/setShowDetailsAction";
import {setShowDetailsReducer} from "../reducers/setShowDetailsReducer";

export const filmsSlice = createSlice<IStore, SliceCaseReducers<IStore>, 'films'>({
    name: 'films',
    extraReducers: (builder) => {
        builder.addCase(getMovieList.fulfilled, (state, action) => {
            state.films = action.payload;
            state.filteredFilms = action.payload;
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
        showDetails: false
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
        setShowDetails: {
            reducer: setShowDetailsReducer,
            prepare: setShowDetailsAction
        }
    }
})

export const {filterMovies, sortMoviesByName, sortMoviesByYear, setSelectedMovie, setShowDetails} = filmsSlice.actions;

export const filmsReducer = filmsSlice.reducer;