import {describe} from "node:test";
import {IMovieGenre} from "../../app/types/IMovieGenre";
import {filmIdReducer} from "./filmIdReducer";

describe('filmIdReducer', () => {

    const films = [
        {
            id: '0',
            name: 'test',
            genre: [IMovieGenre.Horror],
            img: '',
            year: '1111',
            duration: '0',
            description: 'test'
        },
        {
            id: '2',
            name: 'test',
            genre: [IMovieGenre.Horror],
            img: '',
            year: '1111',
            duration: '0',
            description: 'test'
        },
        {
            id: '4',
            name: 'test',
            genre: [IMovieGenre.Horror],
            img: '',
            year: '1111',
            duration: '0',
            description: 'test'
        }
    ]

    test('filmIdReducer должен взять фильм по id и записать в state', () => {
        const state: any = {
            films,
            selectedFilm: []
        };
        const action = {
            payload: '4'
        }
        filmIdReducer(state, action);
        expect(state.selectedFilm).toEqual(films[2]);
    });
})