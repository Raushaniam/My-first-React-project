import {describe} from "node:test";
import {sortMoviesByNameReducer} from "./sortMoviesByNameReducer";

describe('sortMoviesByNameReducer', () => {
    const films = [
        {
            name: 'A Million ways...'
        },
        {
            name: 'Pearl'
        },
        {
            name: 'Fall'
        },
        {
            name: 'Nope'
        },
        {
            name: 'Fall'
        },
        {
            name: 'Blade'
        }
    ];

    const sortedFilmsByAsc = [
        {
            name: 'A Million ways...'
        },
        {
            name: 'Blade'
        },
        {
            name: 'Fall'
        },
        {
            name: 'Fall'
        },
        {
            name: 'Nope'
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
            name: 'Nope'
        },
        {
            name: 'Fall'
        },
        {
            name: 'Fall'
        },
        {
            name: 'Blade'
        },
        {
            name: 'A Million ways...'
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