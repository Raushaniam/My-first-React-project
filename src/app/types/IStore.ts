import {IMovie} from "./IMovie";

export interface IStore {
    films: IMovie[],
    filteredFilms: IMovie[],
    selectedFilm: IMovie,
    filterName: string,
    authToken: string,
    isLoggedIn: boolean,
    error: {
        message: string,
    }
}
