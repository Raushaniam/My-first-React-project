import {IMovie} from "../../../types/IMovie";

export interface IMovieList {
    films: IMovie[],
    showMovieDetails: (id: string) => void
}