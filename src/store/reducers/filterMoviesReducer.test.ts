import {describe} from "node:test";
import {IMovieGenre} from "../../app/types/IMovieGenre";
import {filterMoviesReducer} from "./filterMoviesReducer";


describe('filterMoviesReducer', () => {
    const films = [
        {
            name: 'Fall',
            genre: [IMovieGenre.Thriller],
        },
        {
            name: 'Pearl',
            genre: [IMovieGenre.Horror],
        },
        {
            name: 'Blade',
            genre: [IMovieGenre.Action],
        }
    ];

    test('filterMoviesReducer должен проверить поисковую строку, если она пуста - записать в state все фильмы', () => {
        const state: any = {
            films,
            filterName: '',
            filteredFilms: []
        };
        const action = {
            payload: {
                filterName: '',
                filterType: 'name'
            }
        }
        filterMoviesReducer(state, action);
        expect(state.filterName).toBeFalsy();
        expect(state.filteredFilms).toEqual(films);
    });

    test('filterMoviesReducer должен взять фильм(ы) по названию, которое было введено в поисковую строку и записать в state', () => {
        const state: any = {
            films,
            filterName: 'test',
            filteredFilms: []
        };
        const action = {
            payload: {
                filterName: 'Fall',
                filterType: 'name'
            }
        }
        filterMoviesReducer(state, action);
        expect(state.filteredFilms).toEqual([films[0]]);
    });

    test('filterMoviesReducer должен взять фильм(ы) по жанру, которое было введено в поисковую строку и записать в state', () => {
        const state: any = {
            films,
            filterName: 'test',
            filteredFilms: []
        };
        const action = {
            payload: {
                filterName: 'horror',
                filterType: 'genre'
            }
        }
        filterMoviesReducer(state, action);
        expect(state.filteredFilms).toEqual([films[1]]);
    });
})