import {describe} from "node:test";
import {sortMoviesByYearReducer} from "./sortMoviesByYearReducer";

describe('sortMoviesByYearReducer', () => {
    const films = [
        {
            year: '2023'
        },
        {
            year: '1998'
        },
        {
            year: '2012'
        },
        {
            year: '2012'
        },
        {
            year: '2022'
        }
    ];

    const sortedFilmsByAsc = [
        {
            year: '1998'
        },
        {
            year: '2012'
        },
        {
            year: '2012'
        },
        {
            year: '2022'
        },
        {
            year: '2023'
        }
    ];

    const sortedFilmsByDesc = [
        {
            year: '2023'
        },
        {
            year: '2022'
        },
        {
            year: '2012'
        },
        {
            year: '2012'
        },
        {
            year: '1998'
        }
    ];

    test('sortMoviesByYearReducer должен отсортировать фильмы по году и возрастанию, и записать в state', () => {
        const state: any = {
            films,
            filteredFilms: []
        };
        const action = {
            payload: {
                sortType: 'asc'
            }
        }
        sortMoviesByYearReducer(state, action);
        expect(state.filteredFilms).toEqual(sortedFilmsByAsc);
    });

    test('sortMoviesByYearReducer должен отсортировать фильмы по году и убыванию, и записать в state', () => {
        const state: any = {
            films,
            filteredFilms: []
        };
        const action = {
            payload: {
                sortType: 'desc'
            }
        }
        sortMoviesByYearReducer(state, action);
        expect(state.filteredFilms).toEqual(sortedFilmsByDesc);
    });
})