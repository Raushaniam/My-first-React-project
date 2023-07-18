import {IMovie} from "../../types/IMovie";

export interface IMovieDetails {
    id: string,
    hideMovieDetails: () => void,
    films: IMovie[]
}