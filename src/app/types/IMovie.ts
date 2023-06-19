import {IMovieGenre} from "./IMovieGenre";

export interface IMovie {
    id: string,
    name: string,
    genre: IMovieGenre[],
    img: string,
    year: string
}