import {IMovie} from "../../types/IMovie";
import {ISort} from "../../types/ISort";

export interface IMain {
    showMovieDetails: (id: string) => void,
    films: IMovie[],
    filterType: string,
    numberOfFilms: number | string,
    dates: string,
    changeSortType: (type: ISort) => void,
    sortType: ISort
}