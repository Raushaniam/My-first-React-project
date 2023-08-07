import {IMovie} from "./IMovie";

export interface IStore {
    films: IMovie[],
    filteredFilms: IMovie[],
    selectedFilm: IMovie,
    showDetails: boolean
}
