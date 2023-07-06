import {IMovie} from "../../types/IMovie";

export interface IMain {
    showMovieDetails: (id: string) => void,
    films: IMovie[]
}