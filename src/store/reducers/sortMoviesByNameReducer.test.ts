import {describe} from "node:test";
import {sortMoviesByNameReducer} from "./sortMoviesByNameReducer";

describe('sortMoviesByNameReducer', () => {
    const films = [
        {
            name: 'Fall'
        },
        {
            name: 'Pearl'
        },
        {
            name: 'Blade'
        }
    ];

    const sortedFilmsByAsc = [
        {
            name: 'Blade'
        },
        {
            name: 'Fall'
        },
        {
            name: 'Pearl'
        }
    ];

    const sortedFilmsByDesc = [
        {
            name: 'Pearl'
        },
        {
            name: 'Fall'
        },
        {
            name: 'Blade'
        }
    ];

    test('sortMoviesByNameReducer должен отсортировать фильмы по названию и возрастанию, и записать в state', () => {
        const state: any = {
            films,
            filteredFilms: []
        };
        const action = {
            payload: {
                sortType: 'asc'
            }
        }
        sortMoviesByNameReducer(state, action);
        expect(state.filteredFilms).toEqual(sortedFilmsByAsc);
    });

    test('sortMoviesByNameReducer должен отсортировать фильмы по названию и убыванию, и записать в state', () => {
        const state: any = {
            films,
            filteredFilms: []
        };
        const action = {
            payload: {
                sortType: 'desc'
            }
        }
        sortMoviesByNameReducer(state, action);
        expect(state.filteredFilms).toEqual(sortedFilmsByDesc);
    });
})